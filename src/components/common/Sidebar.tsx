import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", path: "/" },
  { name: "Inspection", path: "/inspection" },
  { name: "Formula", path: "/formula" },
  { name: "Report", path: "/report" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        background: "#0f172a",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          padding: 24,
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        OpsSby
      </div>

      {menus.map((menu) => (
        <NavLink
          key={menu.path}
          to={menu.path}
          style={({ isActive }) => ({
            display: "block",
            padding: "14px 24px",
            color: "#fff",
            textDecoration: "none",
            background: isActive ? "#1e293b" : "transparent",
          })}
        >
          {menu.name}
        </NavLink>
      ))}
    </aside>
  );
}