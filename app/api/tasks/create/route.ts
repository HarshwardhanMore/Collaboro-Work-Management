import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId, toPerson, priority, startDate, dueDate, name, description, organizationId, projectId, sprintId } = await req.json();
    if (!name || !description)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    console.log(userId, toPerson, priority, startDate, dueDate, name, description, organizationId, projectId, sprintId);

    const newTask = await prisma.task.create({
      data: {
        fromPerson: userId,
        // profileId: "",
        toPerson: toPerson,
        priority: priority,
        startDate: startDate,
        dueDate: dueDate,
        name: name,
        description: description,
        organizationId: organizationId,
        projectId: projectId,
        sprintId: sprintId
      },
    });
    return NextResponse.json(
      { newTask },
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
