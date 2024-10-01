'use client';

import { logOut } from '@/actions/logout';

interface LogOutProps {
  children: React.ReactNode;
}

export const LogOutButton = ({ children }: LogOutProps) => {
  const onClick = () => {
    return logOut();
  };

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
