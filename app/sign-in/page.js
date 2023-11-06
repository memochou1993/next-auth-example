'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');

  const submit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    console.log(result);
    if (result.error) {
      alert(result.error);
      return;
    }
    router.push('/dashboard');
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder="Email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={submit}
        >
          Sign In
        </button>
      </form>
    </>
  );
}
