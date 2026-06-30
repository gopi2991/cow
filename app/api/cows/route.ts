import { connectDB } from "@/lib/mongodb";
import Cow from "@/models/Cow";


export async function GET() {
  try {
  
    await connectDB(); 

    const cows = await Cow.find();

    return Response.json(cows);
  } catch (error) {
    console.error("GET ERROR:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  console.log("✅ API HIT: POST /api/cows");

  try {
    await connectDB();

    const body = await req.json();

    const cow = await Cow.create(body);

    return Response.json(cow);
  } catch (error) {
    console.error("POST ERROR:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}