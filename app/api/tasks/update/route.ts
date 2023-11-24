import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { id, active, isComplete, bugs, documentation, feedback } = await req.json();
    if (!id)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    console.log(id, active, isComplete, bugs, documentation, feedback);

    const updatedTask = await prisma.task.update({
        where: {
            id: id
        },
        data: {
            active: false,
            isComplete: true,
            bugs: bugs,
            documentation: documentation,
            feedback: feedback
        },
    });
    return NextResponse.json(
      { updatedTask },
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
