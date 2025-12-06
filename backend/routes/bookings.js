// Admin: View all bookings with user & trek info
app.get("/api/bookings", authMiddleware("admin"), async (req, res) => {
  try {
    const bookings = await Booking.find().lean();

    const detailedBookings = await Promise.all(
      bookings.map(async (b) => {
        const user = await User.findById(b.userId).lean();
        const trek = await Trek.findById(b.trekId).lean();
        return {
          _id: b._id,
          date: b.date,
          userName: user?.name || "N/A",
          userEmail: user?.email || "N/A",
          trekTitle: trek?.title || "N/A",
        };
      })
    );

    res.json(detailedBookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
