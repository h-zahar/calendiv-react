const MonthlyView = () => {
  const test = Array(35)
    .fill(1)
    .map((t, i) => t * i + 1);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        minHeight: "700px",
        height: "850px",
        // margin: "50px 200px",
        minWidth: "380px",
        width: "1400px",
        // border: "1px solid black",
        border: "0.5px solid #dadce0",
      }}
    >
      {test.map((t, i) => {
        return (
          <div
            style={{
              border: "0.5px solid #dadce0",
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "12px" }}>
              {i < 7 && (
                <div
                  style={{
                    color: "#70757a",
                    fontSize: "11px",
                    textTransform: "uppercase",
                  }}
                >
                  {days[i]} <br /> <br />
                </div>
              )}
              {t}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyView;
