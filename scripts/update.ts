import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.users.update({
            where: {
                id: '3f6eaf4a-46e4-471a-977a-f7d8b03e3e6a'
            }, data: {
                name: 'Carlos Clayton',
                profile: {
                    connect: {
                        id: '3840a21d-3319-4836-9c38-020f04b98b39'
                    }
                }
            }
        }
    )
    console.log(user)
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