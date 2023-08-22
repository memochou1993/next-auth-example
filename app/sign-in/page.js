'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const submit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      username: 'test',
      password: 'password',
      redirect: false,
    });
    console.log('result', result);
    if (result.ok) {
      router.push('/dashboard');
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </>
  );
}
