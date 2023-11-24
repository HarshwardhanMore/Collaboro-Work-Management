import prisma from "@/prisma";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { firstName, lastName, primaryEmail, secondaryEmail, phoneNumber, dateOfBirth, gender, userId } = await req.json();
    // if (!firstName || !primaryEmail || !userId)
      // return NextResponse.json({ error: "Invalid Data" }, { status: 422 });

    await connectToDb();

    const newProfile = await prisma.profile.create({
      data: {
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        primaryEmail: primaryEmail,
        secondaryEmail: secondaryEmail,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        gender: gender
      },
    });
    return NextResponse.json(
      { newProfile },
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
