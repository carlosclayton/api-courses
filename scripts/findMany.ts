import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const getUsers: object | null = await prisma.users.findMany({
        include: {
            profile: true,
        }

    })
    console.log(getUsers)
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