import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId } = await req.json();
    if (!userId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();
    const organizations = await prisma.organizationPerson.findMany({
      where: {
        userId: userId,
      },
      include: {
        Organization: {
          include: {
            OrganizationPerson: true,
            teams: true,
            projects: true,
          },
        },
      },
    });
    console.log(organizations);
    return NextResponse.json(organizations, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// export const POST = async (req: Request) => {
//   try {
//     const { name, description, creator_id } = await req.json();
//     if (!name || !description)
//       return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

//     await connectToDb();

//     const newOrganization = await prisma.organization.create({
//       data: {
//         name: name,
//         description: description,
//       },
//     });
//     const id = newOrganization.id;

//     const newOrganizationPerson = await prisma.organizationPerson.create({
//       data: {
//         userEmail: id,
//         organizationId: id,
//         status: "creator",
//       },
//     });

//     return NextResponse.json(
//       { newOrganization, newOrganizationPerson },
//       {
//         status: 200,
//       }
//     );
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };
