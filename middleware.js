export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/((?!api|sign-up|sign-in|forgot-password|sign-out|_next|.*\\..*|$).*)',
  ],
};
