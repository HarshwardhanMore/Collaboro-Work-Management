import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { projectId } = await req.json();
    if (!projectId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();
    const projects = await prisma.project.findFirst({
      where: {
        id: projectId,
      },
      include: {
        sprints: {
            include: {
                sprintTeam: {
                    include: {
                        Team: {
                            include: {
                                teamPersons: true
                            }
                        }
                    }
                },
                tasks: true
            }
        }
      },
    });
    console.log(projects);
    return NextResponse.json(projects, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};