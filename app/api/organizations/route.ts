import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDb();
    const organizations = await prisma.organization.findMany({
      include: {
        OrganizationPerson: true,
        teams: true,
        projects: true,
      },
    });
    return NextResponse.json(organizations, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// export const POST = async (req: Request) => {
//   try {
//     const { name, description, userEmail } = await req.json();
//     if (!name || !description)
//       return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

//     await connectToDb();

//     const newOrganization = await prisma.organization.create({
//       data: {
//         name: name,
//         description: description,
//       },
//     });

//     const newOrganizationPerson = await prisma.organizationPerson.create({
//       data: {
//         userEmail: userEmail,
//         organizationId: newOrganization.id,
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
