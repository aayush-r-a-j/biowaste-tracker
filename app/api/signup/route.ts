import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import { connectDB } from "../../../lib/mongo";

import User from "../../../models/user";



export async function POST(request: Request) {

  try {

    await connectDB();

    const body = await request.json();

    const { email, password } = body;



    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );

    }



    const hashedPassword =
      await bcrypt.hash(password, 10);



    const user = await User.create({
      email,
      password: hashedPassword,
    });



    return NextResponse.json({
      message: "Signup Successful",
      user,
    });

  } catch (error) {

    return NextResponse.json(
      {
        message: "Signup Error",
      },
      {
        status: 500,
      }
    );

  }

}