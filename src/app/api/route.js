import { NextResponse } from "next/server";

// export async function GET(Request) { }

// export async function HEAD(Request) { }

// export async function PUT(Request) { }

// export async function DELETE(Request) { }

// export async function PATCH(Request) { }

// export async function OPTIONS(Request) { }

export async function POST(Request) {
    let data = await request.json();
    console.log(data);
    return NextResponse.json({
        success: true,
        date: "yes"
    })
}