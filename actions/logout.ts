'use server';

import { signOut } from '@/auth';

export const logOut = async () => {
  // some serverside stuffs
  await signOut();
};
