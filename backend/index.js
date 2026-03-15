require("dotenv").config({ debug: false });

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

// ✅ CORS — allow localhost for dev and Vercel URL for production
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL, // e.g. https://safarnama.vercel.app
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(express.json());

const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB : Connected"))
  .catch(() => console.log("DB : Connection Failed"));

const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }
}));

const Trek = mongoose.model("Trek", new mongoose.Schema({
  title: String,
  desc: String,
  img: String
}));

const Booking = mongoose.model("Booking", new mongoose.Schema({
  userId: String,
  trekId: String,
  date: { type: Date, default: Date.now }
}));

const auth = (role) => (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const user = jwt.verify(token, JWT_SECRET);
    if (role && user.role !== role) return res.status(403).json({ msg: "Forbidden" });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (await User.findOne({ email })) return res.status(400).json({ msg: "User exists" });

    const hashed = await bcrypt.hash(password, 10);
    await new User({ name, email, password: hashed, role: role || "user" }).save();
    res.json({ msg: "Registered " });
  } catch (e) {
    res.status(500).json({ msg: "Error" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch {
    res.status(500).json({ msg: "Error" });
  }
});

app.get("/api/treks", async (req, res) => res.json(await Trek.find()));
app.post("/api/treks", auth("admin"), async (req, res) => res.json(await new Trek(req.body).save()));
app.put("/api/treks/:id", auth("admin"), async (req, res) => res.json(await Trek.findByIdAndUpdate(req.params.id, req.body, { new: true })));
app.delete("/api/treks/:id", auth("admin"), async (req, res) => {
  await Trek.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.post("/api/bookings", auth(), async (req, res) => res.json(await new Booking({ userId: req.user.id, trekId: req.body.trekId }).save()));
app.get("/api/bookings", auth("admin"), async (req, res) => {
  const list = await Booking.find().lean();
  const details = await Promise.all(list.map(async b => ({
    _id: b._id,
    date: b.date,
    userName: (await User.findById(b.userId).lean())?.name || "N/A",
    trekTitle: (await Trek.findById(b.trekId).lean())?.title || "N/A"
  })));
  res.json(details);
});

app.get("/api/users", auth("admin"), async (req, res) => res.json(await User.find()));

app.listen(PORT, () => console.log(`Port Running on :${PORT}`));
