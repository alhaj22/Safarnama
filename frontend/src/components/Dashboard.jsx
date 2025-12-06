import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [treks, setTreks] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("users");

  const BASE_URL = "http://localhost:5001/api";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Users
        const usersRes = await fetch(`${BASE_URL}/users`, {
          headers: { Authorization: token },
        });
        setUsers(await usersRes.json());

        // Treks
        const treksRes = await fetch(`${BASE_URL}/treks`, {
          headers: { Authorization: token },
        });
        setTreks(await treksRes.json());

        // Bookings
        const bookingsRes = await fetch(`${BASE_URL}/bookings`, {
          headers: { Authorization: token },
        });
        setBookings(await bookingsRes.json());
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    if (token) fetchData();
  }, [token]);

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      {/* Tabs */}
      <div className="tabs">
        {["users", "treks", "bookings"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ✅ USERS TABLE */}
      {activeTab === "users" && (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u._id}>
                <td>{index + 1}</td> {/* ✅ SERIAL NUMBER */}
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✅ TREKS TABLE */}
      {activeTab === "treks" && (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {treks.map((t, index) => (
              <tr key={t._id}>
                <td>{index + 1}</td> {/* ✅ SERIAL NUMBER */}
                <td>{t.title}</td>
                <td>{t.desc}</td>
                <td>
                  {t.img && <img src={t.img} alt={t.title} width="80" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✅ BOOKINGS TABLE */}
      {activeTab === "bookings" && (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Trek Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr key={b._id}>
                <td>{index + 1}</td> {/* ✅ SERIAL NUMBER */}
                <td>{b.userName}</td>
                <td>{b.userEmail}</td>
                <td>{b.trekTitle}</td>
                <td>{new Date(b.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
