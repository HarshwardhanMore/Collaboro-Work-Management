import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, description, organizationId, projectId, createTeamFlag } = await req.json();
    if (!name || !description)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    const newSprint = await prisma.sprint.create({
      data: {
        name: name,
        description: description,
        projectId: projectId,
        organizationId: organizationId
      },
    });

    if(createTeamFlag === "true"){
        
      const newTeam = await prisma.team.create({
        data: {
          name: "Team_For_"+name,
          description: "Dummy_Team_For_"+name,
          organizationId: organizationId
        },
      });
      const teamId = newTeam.id;
      
      const newSprintTeam = await prisma.sprintTeam.create({
        data: {
          teamId: teamId,
          sprintId: newSprint.id
        },
      });
      return NextResponse.json(
        { newSprint, newSprintTeam },
        {
          status: 200,
        }
      );
    }


    return NextResponse.json(
      { newSprint },
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
