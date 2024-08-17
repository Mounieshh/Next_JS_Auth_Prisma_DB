import NextAuth from "next-auth";
import Github from 'next-auth/providers/github';

const nextAuthOptions = NextAuth({
    providers: [Github]
});

export const GET = nextAuthOptions.handlers.GET;
export const POST = nextAuthOptions.handlers.POST;
export const auth = nextAuthOptions.auth;
