import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, description, organizationId, userId } = await req.json();
    if (!name || !description)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    const newTeam = await prisma.team.create({
      data: {
        name: name,
        description: description,
        organizationId: organizationId
      },
    });
    const teamId = newTeam.id;

    const newTeamPerson = await prisma.teamPerson.create({
      data: {
        userId: userId,
        teamId: teamId
      },
    });

    return NextResponse.json(
      { newTeam, newTeamPerson },
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
