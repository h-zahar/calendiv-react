import {
  addDays,
  endOfMonth,
  getDate,
  getDay,
  getDaysInMonth,
  startOfMonth,
  subDays,
} from "date-fns";

const Calendar = () => {
  // const test = Array(35)
  //   .fill(1)
  //   .map((t, i) => t * i + 1);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array(getDaysInMonth(new Date()))
    .fill(1)
    .map((t, i) => t * i + 1);

  const numOfPrevDays = Array(getDay(startOfMonth(new Date()))).fill(1);
  const prevDays = numOfPrevDays.map((d, i) =>
    getDate(subDays(startOfMonth(new Date()), numOfPrevDays.length - i))
  );
  dates.unshift(...prevDays);

  // if (arr.length < 35) {
  const numOfNextDays = Array(6 - getDay(endOfMonth(new Date()))).fill(1);
  const nextDays = numOfNextDays.map((d, i) =>
    getDate(addDays(startOfMonth(new Date()), d * i))
  );
  // }
  dates.push(...nextDays);

  // console.log(getDay(startOfMonth(new Date())));
  // console.log(getDate(subDays(startOfMonth(new Date()), 5)));
  // console.log(startOfMonth(new Date()));

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
      {dates.map((t, i) => {
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
              <div
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="date-div"
              >
                {t}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
