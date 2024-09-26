'use server';

import { ResetSchema } from '@/schemas';
import * as z from 'zod';

import { getUserByEmail } from '@/data/user';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid email!' };
  }

  const { email } = validatedFields.data;

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return { error: 'Email not found!' };
  }

  // TODO: Generate Token & Send Email

  return { success: 'Reset mail sent successfully!' };
};
