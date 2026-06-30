import mongoose from "mongoose"

const MilkSchema = new mongoose.Schema(
  {
    cowName: String,
    morning: Number,
    evening: Number,
    total: Number,
    price: Number,
    revenue: Number,
  },
  { timestamps: true }
)

export default mongoose.models.Milk || mongoose.model("Milk", MilkSchema)