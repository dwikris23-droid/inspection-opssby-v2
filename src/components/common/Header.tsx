export default function Header() {
  return (
    <header
      style={{
        height: "64px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>Inspection OpsSby</h2>
        <small>Quality Inspection System</small>
      </div>

      <div>
        <strong>Admin</strong>
      </div>
    </header>
  );
}