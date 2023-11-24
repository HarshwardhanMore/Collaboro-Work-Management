import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { sprintId } = await req.json();
    if (!sprintId)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();
    const tasks = await prisma.task.findMany({
      where: {
        sprintId: sprintId,
      }
    });
    console.log(tasks);
    return NextResponse.json(tasks, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
