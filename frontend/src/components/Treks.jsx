import React, { useEffect, useState } from "react";
import "../styles/Treks.css";

export default function Trips() {
  const [treks, setTreks] = useState([]);
  const [user, setUser] = useState(null);

  // Admin input states
  const [newTrek, setNewTrek] = useState({ title: "", desc: "", img: "" });

  // ✅ Edit mode states
  const [editMode, setEditMode] = useState(false);
  const [editTrek, setEditTrek] = useState({
    _id: "",
    title: "",
    desc: "",
    img: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    fetchTreks();
  }, []);

  const fetchTreks = async () => {
    const res = await fetch("http://localhost:5001/api/treks");
    const data = await res.json();
    setTreks(data);
  };

  const handleBook = async (id) => {
    if (!user) {
      alert("Please login to book a trek!");
      return;
    }
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5001/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ trekId: id }),
    });
    if (res.ok) alert("Booking successful!");
  };

  // ----------------- Admin CRUD -----------------
  const token = localStorage.getItem("token");

  const handleAdd = async () => {
    const res = await fetch("http://localhost:5001/api/treks", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify(newTrek),
    });
    if (res.ok) {
      alert("Trek added");
      setNewTrek({ title: "", desc: "", img: "" });
      fetchTreks();
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5001/api/treks/${id}`, {
      method: "DELETE",
      headers: { Authorization: token },
    });
    if (res.ok) {
      alert("Trek deleted");
      fetchTreks();
    }
  };

  // ✅ Open Edit Trek Modal
  const handleEdit = (trek) => {
    setEditMode(true);
    setEditTrek(trek);
  };

  // ✅ Update Trek
  const handleUpdate = async () => {
    const res = await fetch(
      `http://localhost:5001/api/treks/${editTrek._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          title: editTrek.title,
          desc: editTrek.desc,
          img: editTrek.img,
        }),
      }
    );

    if (res.ok) {
      alert("Trek Updated Successfully");
      setEditMode(false);
      fetchTreks();
    }
  };

  return (
    <section className="trips-section">
      <h1 className="page-title">Explore Our Travel Packages</h1>

      {/* ✅ Admin Add Trek Form  */}
      {user?.role === "admin" && (
        <div className="admin-add-trek">
          <input
            placeholder="Title"
            value={newTrek.title}
            onChange={(e) =>
              setNewTrek({ ...newTrek, title: e.target.value })
            }
          />
          <input
            placeholder="Description"
            value={newTrek.desc}
            onChange={(e) =>
              setNewTrek({ ...newTrek, desc: e.target.value })
            }
          />
          <input
            placeholder="Image URL"
            value={newTrek.img}
            onChange={(e) =>
              setNewTrek({ ...newTrek, img: e.target.value })
            }
          />
          <button onClick={handleAdd}>Add Trek</button>
        </div>
      )}

      {/* ✅ Treks Grid */}
      <div className="trips-grid">
        {treks.map((item) => (
          <article className="trip-card" key={item._id}>
            <img src={item.img} alt={item.title} className="trip-img" />
            <div className="trip-content">
              <h2 className="trip-title">{item.title}</h2>
              <p className="trip-desc">{item.desc}</p>

              {/* ✅ Admin Action Buttons */}
              {user?.role === "admin" && (
                <>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </>
              )}

              {/* ✅ Book Button */}
              {user?.role === "user" ? (
                <button onClick={() => handleBook(item._id)}>Book Now</button>
              ) : (
                <button onClick={() => alert("Please login to book a trek!")}>
                  Book Now
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* ✅ EDIT MODAL */}
      {editMode && (
        <div className="edit-modal">
          <div className="edit-box">
            <h2>Edit Trek</h2>

            <input
              type="text"
              value={editTrek.title}
              onChange={(e) =>
                setEditTrek({ ...editTrek, title: e.target.value })
              }
            />
            <input
              type="text"
              value={editTrek.desc}
              onChange={(e) =>
                setEditTrek({ ...editTrek, desc: e.target.value })
              }
            />
            <input
              type="text"
              value={editTrek.img}
              onChange={(e) =>
                setEditTrek({ ...editTrek, img: e.target.value })
              }
            />

            <div className="modal-buttons">
              <button onClick={handleUpdate} className="update-btn">
                Update
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
