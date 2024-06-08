const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@email.com";
  const adminPassword = "Pass.1234";
  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  const username = "s_admin";

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      username: username,
      password: hashedPassword,
      role: "SUPER_ADMIN",
    },
  });

  console.log(`Super admin created: ${adminUser.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
