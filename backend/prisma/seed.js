import "dotenv/config";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Hapus dari tabel "anak" dulu agar tidak melanggar foreign key
  await prisma.comment.deleteMany();
  await prisma.task.deleteMany();
  await prisma.projectMember.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash('password123', 10);

  const jerry = await prisma.user.create({
    data: { name: 'Jerry', email: 'jerry@example.com', passwordHash },
  });
  const budi = await prisma.user.create({
    data: { name: 'Budi', email: 'budi@example.com', passwordHash },
  });

  await prisma.project.create({
    data: {
      name: 'Website Sekolah',
      description: 'Redesain website sekolah',
      ownerId: jerry.id,
      members: {
        create: [
          { userId: jerry.id, role: 'OWNER' },
          { userId: budi.id, role: 'MEMBER' },
        ],
      },
      tasks: {
        create: [
          { title: 'Buat desain homepage', status: 'IN_PROGRESS', priority: 'HIGH', createdById: jerry.id, assigneeId: budi.id },
          { title: 'Siapkan database', status: 'TODO', createdById: jerry.id },
          { title: 'Setup repository', status: 'DONE', createdById: jerry.id, assigneeId: jerry.id },
        ],
      },
    },
  });

  console.log('✅ Seed selesai');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());