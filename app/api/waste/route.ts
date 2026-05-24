import { NextResponse } from "next/server";

import { connectDB } from "../../../lib/mongo";

import Waste from "../../../models/waste";



export async function POST(request: Request) {

  try {

    await connectDB();

    const body = await request.json();

    const waste = await Waste.create(body);

    return NextResponse.json({
      message: "Waste Record Saved",
      waste,
    });

  } catch (error) {

    return NextResponse.json(
      {
        message: "Error Saving Waste",
      },
      {
        status: 500,
      }
    );

  }

}
export async function GET() {

  try {

    await connectDB();

    const wastes =
      await Waste.find();

    return NextResponse.json(
      wastes
    );

  } catch (error) {

    return NextResponse.json(
      {
        message:
          "Error Fetching Waste",
      },
      {
        status: 500,
      }
    );

  }

}