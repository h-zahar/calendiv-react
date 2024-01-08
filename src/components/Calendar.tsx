const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const test = Array(35)
    .fill(1)
    .map((t, i) => t * i + 1);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        height: "190px",
        // margin: "50px 200px",
        minWidth: "190px",
        margin: "60px 30px auto 30px",
      }}
    >
      {test.map((t, i) => {
        return (
          <div
            style={{
              //   border: "1px solid #dadce0",
              //   display: "flex",
              justifyContent: "center",
              paddingTop: "5px",
              textAlign: "center",
              fontSize: "10px",
            }}
          >
            <div>
              {i < 7 && (
                <div
                  style={{
                    color: "#70757a",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    marginBottom: "18px",
                  }}
                >
                  {days[i][0]}
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

export default Calendar;
