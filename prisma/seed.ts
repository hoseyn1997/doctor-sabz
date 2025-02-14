import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Check if the Admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { Email: 'admin@prisma.io' },
  });

  if (existingAdmin) {
    console.log('Database already seeded. Skipping seeding process.');
    return;
  }

  const Admin: User = await prisma.user.upsert({
    where: { Email: 'admin@prisma.io' },
    update: {},
    create: {
      UserName: "admin",
      Bio: "admin",
      Password: "P@RRW0RD",
      Email: 'admin@prisma.io',
      EmailConfirmed: true,
      PhoneNumber: "09145651334",
      PhoneNumberConfirmed: true,
      Role: "Admin",
    },
  })
  const Hassan: User = await prisma.user.upsert({
    where: { Email: 'hassan19@prisma.io' },
    update: {},
    create: {
      UserName: "hassan19",
      Bio: "حسن عباسی",
      Password: "P@RRW0RD",
      Email: 'hassan_abbasi@prisma.io',
      EmailConfirmed: true,
      PhoneNumber: "09397080885",
      PhoneNumberConfirmed: true,
      Role: "Teacher",
      Collections: {
        create: [
          {
            Id: "150b4de8-de4b-47d6-a416-17af947bdc96",
            Title: "آموزش TailwindCss به زبان ساده",
            Description: "تمام المان‌ها و استایل‌های مربوط به Tailwind بصورت رسپانسیو شده به شما ارائه می‌شود به همین دلیل این فریمورک از میزان رسپانسیو و Mobile-First بودن بالایی برخوردار است. از نظر امنیت نیز باید بگویم که Tailwind نسبت به رقبا در زمان اجرا، از مشکلات کمتری برخوردار بوده و استایل‌های عجیب و غریب اعمال نخواهد شد.",
            Cost: "350000",
            DisCount: "51000",
            Teacher: "حسن عباسی",
            Category: "",
            IsActive: true,
            Level: "",
            Score: 5,
            Photo: {
              create: {
                Photo: {
                  create: {
                    FilePath: "/assets/DiHnTQMmBRL.png"
                  }
                }
              }
            },
            Videos: {
              create: [
                {
                  Title: "کلیات دوره",
                  Description: " ویژگی‌های اضافی:  Tailwind بعنوان فریمورکی به حساب می‌آید که در بخش فرانت-اند وبسایت‌ها اجرا می‌شود. به همین دلیل توسعه‌دهندگان باید انتظارات حداکثری از این فریمورک داشته باشند. Tailwind نیز این انتظارات را به جای خواهد آورد چرا که توسعه‌دهندگان این فریمورک با دیگر فریمورک‌های قبل از خود کار کرده و می‌دانند که چه مشکلاتی را برای توسعه‌دهندگان ایجاد می‌کردند و حال آن‌ها را رفع نموده‌اند. شما در Tailwind می‌توانید با استفاده از PurgeCSS کلاس‌هایی که در پروژه خود مورد استفاده قرار نداده‌اید را به سادگی حذف کرده و بار وبسایت‌تان را کم دهید.",
                  FilePath: "2TSN0YETAE.mp4",
                  Order: 1,
                },
                {
                  Title: "نصب و راه اندازی نرم افزار",
                  Description: " ویژگی‌های اضافی:  Tailwind بعنوان فریمورکی به حساب می‌آید که در بخش فرانت-اند وبسایت‌ها اجرا می‌شود. به همین دلیل توسعه‌دهندگان باید انتظارات حداکثری از این فریمورک داشته باشند. Tailwind نیز این انتظارات را به جای خواهد آورد چرا که توسعه‌دهندگان این فریمورک با دیگر فریمورک‌های قبل از خود کار کرده و می‌دانند که چه مشکلاتی را برای توسعه‌دهندگان ایجاد می‌کردند و حال آن‌ها را رفع نموده‌اند. شما در Tailwind می‌توانید با استفاده از PurgeCSS کلاس‌هایی که در پروژه خود مورد استفاده قرار نداده‌اید را به سادگی حذف کرده و بار وبسایت‌تان را کم دهید.",
                  FilePath: "BJMWBCIPL6.mp4",
                  Order: 2,
                },
                {
                  Title: "مینی پروژه ی لندینگ اینستاگرام",
                  Description: " ویژگی‌های اضافی:  Tailwind بعنوان فریمورکی به حساب می‌آید که در بخش فرانت-اند وبسایت‌ها اجرا می‌شود. به همین دلیل توسعه‌دهندگان باید انتظارات حداکثری از این فریمورک داشته باشند. Tailwind نیز این انتظارات را به جای خواهد آورد چرا که توسعه‌دهندگان این فریمورک با دیگر فریمورک‌های قبل از خود کار کرده و می‌دانند که چه مشکلاتی را برای توسعه‌دهندگان ایجاد می‌کردند و حال آن‌ها را رفع نموده‌اند. شما در Tailwind می‌توانید با استفاده از PurgeCSS کلاس‌هایی که در پروژه خود مورد استفاده قرار نداده‌اید را به سادگی حذف کرده و بار وبسایت‌تان را کم دهید.",
                  FilePath: "KAT9HRERHK.mp4",
                  Order: 3,
                },
                {
                  Title: "مینی پروژه دارک مورد و سایت دوزبانه",
                  Description: " ویژگی‌های اضافی:  Tailwind بعنوان فریمورکی به حساب می‌آید که در بخش فرانت-اند وبسایت‌ها اجرا می‌شود. به همین دلیل توسعه‌دهندگان باید انتظارات حداکثری از این فریمورک داشته باشند. Tailwind نیز این انتظارات را به جای خواهد آورد چرا که توسعه‌دهندگان این فریمورک با دیگر فریمورک‌های قبل از خود کار کرده و می‌دانند که چه مشکلاتی را برای توسعه‌دهندگان ایجاد می‌کردند و حال آن‌ها را رفع نموده‌اند. شما در Tailwind می‌توانید با استفاده از PurgeCSS کلاس‌هایی که در پروژه خود مورد استفاده قرار نداده‌اید را به سادگی حذف کرده و بار وبسایت‌تان را کم دهید.",
                  FilePath: "YVN1UOY5TT.mp4",
                  Order: 4,
                },
              ]
            }
          }
        ]
      },
      Photo: {
        create: {
          Photo: {
            create: {
              FilePath: "/assets/CXHZOVD2CGX.jpg",
            }
          }
        }
      },
      UserCollections: {
        create: [{
          CollectionId: "150b4de8-de4b-47d6-a416-17af947bdc96",
          IsAllowed: true,
          IsHost: true,
        }]
      }
    },
  })
  console.log('Seeded Users Are:/n', { Admin, Hassan })
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