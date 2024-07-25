import { PrismaClient } from '@prisma/client';
import { membersData } from './membersData';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function seedMembers() {
  return membersData.map(async (member) =>
    prisma.user.create({
      data: {
        name: member.name,
        email: member.email,
        emailVerified: new Date(),
        passwordHash: await hash('password', 10),
        image: member.image,
        member: {
          create: {
            name: member.name,
            gender: member.gender,
            dateOfBirth: new Date(member.dateOfBirth),
            created: new Date(member.created),
            updated: new Date(member.lastActive),
            description: member.description,
            city: member.city,
            country: member.country,
            image: member.image,
            photos: {
              create: {
                url: member.image,
              },
            },
          },
        },
      },
    }),
  );
}

async function main() {
  await seedMembers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
