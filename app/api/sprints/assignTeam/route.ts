import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { teamId, sprintId } = await req.json();
    if (!teamId || !sprintId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    const newSprintTeam = await prisma.sprintTeam.create({
      data: {
        teamId: teamId,
        sprintId: sprintId
      },
    });

    return NextResponse.json(
      { newSprintTeam },
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
