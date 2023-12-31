import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      async authorize({ email, password }) {
        if (email === 'test@example.com' && password === 'password') {
          return { token: 'token', email };
        }
        throw new Error('Invalid credentials');
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
