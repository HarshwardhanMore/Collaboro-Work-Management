import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId, organizationId } = await req.json();
    if (!userId || !organizationId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    const newOrganizationPerson = await prisma.organizationPerson.create({
      data: {
        userId: userId,
        organizationId: organizationId,
        status: "join",
      },
    });

    return NextResponse.json(newOrganizationPerson, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
