import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId, teamId } = await req.json();
    if (!userId || !teamId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    console.log("userId, teamId : ");
    console.log(userId, teamId);

    const newTeamPerson = await prisma.teamPerson.create({
      data: {
        userId: userId,
        teamId: teamId
      },
    });

    return NextResponse.json(
      { newTeamPerson },
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
