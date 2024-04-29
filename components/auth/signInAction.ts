'use server';


import {SignInBody, signInScheme} from "@prisma/User";
import {redirect} from "next/dist/client/components/redirect";
import {createUserToken, removeUserToken} from "@lib/auth";

export const signInAction = async (body: SignInBody): Promise<{ error: string } | null> => {
    const result = signInScheme.safeParse(body)
    if (!result.success) {
        return {error: result.error.errors[0].message}
    }

    console.log('Sign in action', body)
    // redirect('.')
    if (body.email === 'a@a.com' && body.password === '1234') {
        // redirect('/dashboard')
        await createUserToken(body.email)
        redirect('/')
        return null
    }
    return {error: "Invalid email or password"}
}


export const signOutAction = async (): Promise<void> => {
    await removeUserToken()
    // redirect('')
}
