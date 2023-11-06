'use client';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { data: session } = useSession();

  console.log('session', session);

  return (
    <>
      <button
        type="button"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </>
  );
}
