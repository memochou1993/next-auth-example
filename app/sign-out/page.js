'use client';

import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      if (session) {
        await signOut({
          redirect: false,
        });
      }
      router.push('/sign-in');
    })();
  }, [router, session]);

  return (
    <div />
  );
}
