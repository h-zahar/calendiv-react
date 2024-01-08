import React from "react";

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
        height: "700px",
        margin: "50px 200px",
      }}
    >
      {test.map((t, i) => {
        return (
          <div
            style={{
              border: "1px solid #dadce0",
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
