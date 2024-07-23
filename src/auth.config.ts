import type { NextAuthConfig } from 'next-auth';
import Credentials from '@auth/core/providers/credentials';
import { loginSchema } from '@/lib/schemas/loginSchema';
import { getUserByEmail } from '@/app/actions/authActions';
import { compare } from 'bcryptjs';

export default {
  providers: [
    Credentials({
      name: 'credentials',
      async authorize(creds) {
        const validated = loginSchema.safeParse(creds);

        if (validated.success) {
          // extract email and password
          const { email, password } = validated.data;

          const user = await getUserByEmail(email);

          // if user doesn't exist or password isn't correct
          if (!user || !(await compare(password, user.passwordHash))) return null;

          // if user exists and password is correct
          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
