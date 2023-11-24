import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, description, organizationId } = await req.json();
    if (!name || !description)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    const newProject = await prisma.project.create({
      data: {
        name: name,
        description: description,
        organizationId: organizationId
      },
    });
    const id = newProject.id;

    // const newOrganizationPerson = await prisma.organizationPerson.create({
    //   data: {
    //     userId: userId,
    //     organizationId: id,
    //     status: "create",
    //   },
    // });

    return NextResponse.json(
      { newProject },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
