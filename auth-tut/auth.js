import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

const nextAuthOptions = NextAuth({
    adapter : PrismaAdapter(db),
    session : {strategy : "jwt"},
    ...authConfig
});

export const GET = nextAuthOptions.handlers.GET;
export const POST = nextAuthOptions.handlers.POST;
export const auth = nextAuthOptions.auth;
