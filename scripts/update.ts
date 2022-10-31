import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.users.update({
            where: {
                id: '86b2e31b-b03b-4640-9048-6313cb6107d2'
            }, data: {
                name: 'Carlos Clayton',
                profile: {
                    create: {
                        type: 'User'
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