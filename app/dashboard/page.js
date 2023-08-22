'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  console.log('session', session);

  return (
    <>
      <div>
        Dashboard
      </div>
    </>
  );
}