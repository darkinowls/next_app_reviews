import {z} from "zod";

export interface SignInBody {
    email: string
    password: string
}

export const signInScheme = z.object({
    email: z.string().email(),
    password: z.string().min(4, 'Password must be at least 4 characters'),
})