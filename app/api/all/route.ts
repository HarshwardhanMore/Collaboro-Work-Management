import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDb();
    const all = await prisma.organization.findMany({
      include: {
        OrganizationPerson: true,
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
    });
    return NextResponse.json(all, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
