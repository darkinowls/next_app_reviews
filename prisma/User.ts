import getPrisma from "@prisma/Database";
import {SignInBody, SignUpBody} from "@components/auth/utils";
import {UserTokenPayload} from "@lib/auth";
import {compare, hash,} from "bcrypt-ts";


interface User {
    email: string
    name: string
    hashedPassword: string
}

export const createUser = async (body: User): Promise<UserTokenPayload> => {
    console.log('Create user', body)
    const trueHashedPassword = await hash(body.hashedPassword, 10)
    const res = await getPrisma().user.create({
        data: {
            email: body.email,
            name: body.name,
            hashedPassword: trueHashedPassword
        },
        select: {
            id: true,
            name: true,
        }
    })
    return {...res, email: body.email}
}

export const getUserBySignIn = async (body: SignInBody): Promise<UserTokenPayload | null> => {
    const res = await getPrisma().user.findUnique({
        where: {
            email: body.email,
        },
        select: {
            id: true,
            name: true,
            hashedPassword: true,
        }
    })
    if (!res || !await compare(body.password, res.hashedPassword)) {
        return null
    }
    return {...res, email: body.email}
}