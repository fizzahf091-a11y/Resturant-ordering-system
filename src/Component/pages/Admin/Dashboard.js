import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      {/* ---------- Sidebar ---------- */}
      <aside className="sidebar">
        <div className="logo">🍽️Admin</div>
        <nav className="nav">
          <Link to="/admin" className="active">Dashboard</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/menu">Menu</Link>
          <Link to="/admin/customers">Customers</Link>
          <Link to="/admin/reports">Reports</Link>
          <Link to="/admin/settings">Settings</Link>
        </nav>
        <div className="profile">
          <img src="https://i.pinimg.com/1200x/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.jpg" alt="Admin profile" />
          <span>Admin Name</span>
        </div>
      </aside>

      {/* ---------- Main content ---------- */}
      <main className="main">
        {/* Top bar */}
        <div className="admin-header">
          <h1>Dashboard</h1>
          <input type="search" placeholder="Search…" />
        </div> <br />

        {/* Stat cards */}
        <section className="cards">
          <div className="card">
            <h2>Today's Orders</h2><span>128</span>
          </div>
          <div className="card">
            <h2>Revenue</h2><span>$1560</span>
          </div>
          <div className="card">
            <h2>Pending</h2><span>23</span>
          </div>
          <div className="card">
            <h2>Customers</h2><span>64</span>
          </div> 
          <div className="card"
        //  style={{ marginTop: '1rem',  marginBottom: '1rem'}}
         >
        </div>
        </section>
        <br /><br />

        {/* Latest orders table */}
        <section className="table-wrapper">
          <h2 style={{ marginBottom: '1.3rem', fontSize: '2.5rem' }}>Latest Orders</h2>
          <table>
            <thead>
              <tr>
                <th>id</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1023</td><td>keyaan</td><td>2 × Burger</td><td>$18</td>
                <td><span className="status completed">Completed</span></td><td>06-Jul-25</td>
              </tr>
              <tr>
                <td>#1024</td><td>Alqama</td><td>1 × Pizza</td><td>$12</td>
                <td><span className="status pending">Pending</span></td><td>06-Jul-25</td>
              </tr>
              <tr>
                <td>#1025</td><td>lubaba</td><td>3 × Pasta</td><td>$27</td>
                <td><span className="status cancelled">Cancelled</span></td><td>05-Jul-25</td>
              </tr>
              <tr>
                <td>#1026</td><td>Umama</td><td>2 × Steak</td><td>$40</td>
                <td><span className="status completed">Completed</span></td><td>05-Jul-25</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

