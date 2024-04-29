import getPrisma from "@prisma/Database";
import {SignInBody, SignUpBody} from "@components/auth/utils";

interface User {
    email: string
    name: string
    hashedPassword: string
}

export const createUser = async (body: User): Promise<{ id: number }> => {
    console.log('Create user', body)
    const res = await getPrisma().user.create({
        data: {
            email: body.email,
            name: body.name,
            hashedPassword: body.hashedPassword
        },
        select: {
            id: true,
        }
    })
    return res
}

export const getUserBySignIn = async (body: SignInBody): Promise<number | null> => {
    const res = await getPrisma().user.findUnique({
        where: {
            email: body.email,
            hashedPassword: body.password
        },
        select: {
            id: true,
        }
    })
    return res?.id || null
}