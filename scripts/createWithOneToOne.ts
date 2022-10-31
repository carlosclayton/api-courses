import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const profile = await prisma.profiles.create({
        data: {
            type: 'Admin',
            user: {
                create: {
                    name: 'Yasmin Viero',
                    email: 'yasmin.viero@gmail.com'
                }
            }
        },
    })
    console.log(profile)
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