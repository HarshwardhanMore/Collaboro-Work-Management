import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId } = await req.json();
    if (!userId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();
    const me = await prisma.organizationPerson.findMany({
      where: {
        userId: userId,
      },
      include: {
        Organization: {
          include: {
            OrganizationPerson: {
              include: {
                Profile: true,
              }
            },
            teams: {
              include: {
                teamPersons: true,
                sprintTeam: {
                  include: {
                    Sprint: {
                      include: {
                        tasks: true,
                      },
                    },
                  },
                },
              },
            },
            projects: {
              include: {
                sprints: {
                  include: {
                    sprintTeam: {
                      include: {
                        Team: true,
                      },
                    },
                    tasks: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    // console.log(me);
    return NextResponse.json(me, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
