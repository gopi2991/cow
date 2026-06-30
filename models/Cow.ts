import mongoose from "mongoose"

const CowSchema = new mongoose.Schema(
  {
    name: String,
    breed: String,
    age: Number,
    milkProduction: Number,
    
  },
  { timestamps: true }
)

export default mongoose.models.Cow || mongoose.model("Cow", CowSchema)