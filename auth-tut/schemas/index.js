import { z } from 'zod';

// Login Schema
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

// Register Schema
export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Email is Required',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long',
    }),
    name: z.string().min(1, {
        message: 'Name is Required',
    }),
});
