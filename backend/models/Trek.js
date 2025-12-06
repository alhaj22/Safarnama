import mongoose from "mongoose";

const TrekSchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: String,
  bookings: { type: Number, default: 0 }   // ✅ naya field
});

export default mongoose.model("Trek", TrekSchema);
