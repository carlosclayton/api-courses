import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const getUser: object | null = await prisma.user.findUnique({
        where: {
            id: 1,
        },
        select: {
            email: true,
            name: true,
        },
    })
    console.log(getUser)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })