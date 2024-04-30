import {SignJWT, jwtVerify} from "jose";
import {cookies} from "next/headers";

const JWT_TOKEN_NAME = 'token'
const JWT_EXPIRATION = 1000 * 60 * 60 * 24 * 7
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'secret')


export interface UserTokenPayload {
    id: number
    email: string
    name: string
}


export const createUserToken = async (payload: UserTokenPayload): Promise<string> => {

    const exp = new Date(Date.now() + JWT_EXPIRATION)

    const data = new SignJWT({
        user: payload
    })
        .setProtectedHeader({alg: 'HS256'})
        .setExpirationTime(exp)
    const signedToken = await data.sign(JWT_SECRET)

    cookies().set(JWT_TOKEN_NAME, signedToken, {
        httpOnly: true,
        expires: exp,
        sameSite: 'strict'
    })

    return signedToken
}

export const verifyUserToken = async (): Promise<UserTokenPayload | null> => {
    const token = cookies().get(JWT_TOKEN_NAME)
    if (!token || !token.value) {
        return null
    }
    try {
        const data = await jwtVerify(token.value, JWT_SECRET)
        console.log(data.payload.user)
        return data.payload.user as UserTokenPayload
    } catch (e) {
        console.warn('Token verification failed', e)
    }
    return null
}

export const removeUserToken = async (): Promise<void> => {
    cookies().delete(JWT_TOKEN_NAME)
}
