import { connectDB } from "@/lib/mongodb"
import Milk from "@/models/Milk"

export async function GET() {
  await connectDB()
  const data = await Milk.find()
  return Response.json(data)
}

export async function POST(req: Request) {
  await connectDB()

  const body = await req.json()

  const total = body.morning + body.evening
  const revenue = total * body.price

  const record = await Milk.create({
    ...body,
    total,
    revenue,
  })

  return Response.json(record)
}