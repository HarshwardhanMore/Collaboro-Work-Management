import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, description, userId, websiteLink, linkedInLink, field1, field2, field3, field4, field5, firstName, lastName, emailAddress, hierarchyLevel } = await req.json();
    if (!name || !description)
      return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    const newOrganization = await prisma.organization.create({
      data: {
        name: name,
        description: description,
        websiteLink: websiteLink,
        linkedInLink: linkedInLink,
        field1: field1,
        field2: field2,
        field3: field3,
        field4: field4,
        field5: field5,
      },
    });
    const id = newOrganization.id;

    const newOrganizationPerson = await prisma.organizationPerson.create({
      data: {
        userId: userId,
        organizationId: id,
        status: "create",
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        hierarchyLevel: hierarchyLevel
      },
    });

    return NextResponse.json(
      { newOrganization, newOrganizationPerson },
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
