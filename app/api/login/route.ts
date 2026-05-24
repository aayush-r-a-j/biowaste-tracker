import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import { connectDB } from "../../../lib/mongo";

import User from "../../../models/user";



export async function POST(
  request: Request
) {

  try {

    await connectDB();

    const body = await request.json();

    const { email, password } = body;



    const user = await User.findOne({
      email,
    });



    if (!user) {

      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );

    }



    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );



    if (!passwordMatch) {

      return NextResponse.json(
        {
          message: "Invalid password",
        },
        {
          status: 401,
        }
      );

    }



    return NextResponse.json({
      message: "Login Successful",
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        message: "Login failed",
        error,
      },
      {
        status: 500,
      }
    );

  }

}