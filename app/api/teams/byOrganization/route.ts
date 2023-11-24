import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { organizationId } = await req.json();
    if (!organizationId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();
    const teams = await prisma.team.findMany({
      where: {
        organizationId: organizationId,
      },
      include: {
        teamPersons: true,
        sprintTeam: {
            include: {
                Sprint: {
                    include: {
                        tasks: true
                    }
                }
            }
        }
      },
    });
    console.log(teams);
    return NextResponse.json(teams, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};