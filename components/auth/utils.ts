import {z} from "zod";

export interface SignInBody {
    email: string
    password: string
}

export const signInScheme = z.object({
    email: z.string().email(),
    password: z.string().min(4, 'Password must be at least 4 characters'),
})


export interface SignUpBody {
    email: string
    name: string
    password: string
    password2: string
}

export const signUpScheme = z.object({
    email: z.string().email(),
    password: z.string().min(4, 'Password must be at least 4 characters'),
    password2: z.string().min(4, 'Password must be at least 4 characters'),
    name: z.string().min(3, 'Name must be at least 3 characters')
}).refine(data => data.password === data.password2, {
    message: 'Passwords must match',
    path: ['password2']
})

