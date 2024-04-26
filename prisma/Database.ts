import {PrismaClient} from "@prisma/client";


const getPrisma = (): PrismaClient => {
    if (globalThis.prisma) {
        return globalThis.prisma
    }
    globalThis.prisma = new PrismaClient(
        {
            log: [
                {
                    emit: 'stdout',
                    level: 'query',
                },
            ],
        }
    )
    return globalThis.prisma
}

export default getPrisma