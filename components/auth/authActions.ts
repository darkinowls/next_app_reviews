'use server';


import {redirect} from "next/dist/client/components/redirect";
import {createUserToken, removeUserToken} from "@lib/auth";
import {SignInBody, signInScheme, SignUpBody, signUpScheme} from "@components/auth/utils";
import {createUser, getUserBySignIn} from "@prisma/User";

export const signInAction = async (body: SignInBody): Promise<{ error: string } | null> => {
    const result = signInScheme.safeParse(body)
    if (!result.success) {
        return {error: result.error.errors[0].message}
    }

    console.log('Sign in action', body)

    const userId = await getUserBySignIn(body)
    if (!userId) {
        return {error: "Invalid email or password"}
    }
    await createUserToken(body.email)
    redirect('/')
    return null

}


export const signUpAction = async (body: SignUpBody): Promise<{ error: string } | null> => {
    const result = signUpScheme.safeParse(body)
    if (!result.success) {
        return {error: result.error.errors[0].message}
    }

    console.log('Sign up action', body)
    try {
        await createUser({
            email: body.email,
            name: body.name,
            hashedPassword: body.password
        })
        await createUserToken(body.email)
    } catch (e) {
        console.error('Error creating user', e)
        return {error: "Can't create user"}
    }
    redirect('/')
    return null

}


export const signOutAction = async (): Promise<void> => {
    await removeUserToken()
    // redirect('')
}
