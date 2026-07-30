export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 20,
          marginTop: 20,
        }}
      >
        {[
          "Inspection",
          "Passed",
          "Rejected",
          "Pending",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 10,
              boxShadow: "0 1px 4px rgba(0,0,0,.1)",
            }}
          >
            <h3>{item}</h3>

            <h1>0</h1>
          </div>
        ))}
      </div>
    </>
  );
}