import { v4 as uuidv4 } from 'uuid';
import { getVerificationTokenByEmail } from '@/data/verification-token';
import { db } from '@/lib/db';

export const generateVerificationToken = async (email) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }
};
