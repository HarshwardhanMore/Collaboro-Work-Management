import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { organizationId } = await req.json();
    if (!organizationId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();
    const organizations = await prisma.organization.findFirst({
      where: {
        id: organizationId,
      },
      include: {
        projects: {
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
            }
        },
        teams: {
            include: {
                teamPersons: true
            }
        }
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