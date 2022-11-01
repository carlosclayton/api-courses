import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const author = await prisma.authors.create({
        data: {
            name: 'Carlos Clayton',
            books: {
                create: {
                    name: 'PHP 8 - introdução',
                }
            }
        }
    })
    console.log(author)
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