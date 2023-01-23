import { PrismaClient } from '@prisma/client'
import { SEED_USERS } from './seed-data'

const prisma = new PrismaClient()

export const main = async () => {
  await Promise.all(
    SEED_USERS.map(async (user) => {
      await prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user
      })
    })
  )
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
