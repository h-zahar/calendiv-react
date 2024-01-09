import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  getDate,
  getDay,
  getDaysInMonth,
  getMonth,
  getYear,
  startOfMonth,
  subDays,
} from "date-fns";

const MonthlyView = ({ viewDate }: { viewDate: Date }) => {
  // const test = Array(35)
  //   .fill(1)
  //   .map((t, i) => t * i + 1);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array(getDaysInMonth(viewDate))
    .fill(1)
    .map((t, i) => t * i + 1);

  const numOfPrevDays = Array(getDay(startOfMonth(viewDate))).fill(1);
  const prevDays = numOfPrevDays.map((d, i) =>
    getDate(subDays(startOfMonth(viewDate), numOfPrevDays.length - i))
  );
  dates.unshift(...prevDays);

  // if (arr.length < 35) {
  const numOfNextDays = Array(6 - getDay(endOfMonth(viewDate))).fill(1);
  const nextDays = numOfNextDays.map((d, i) =>
    getDate(addDays(startOfMonth(viewDate), d * i))
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
        minHeight: "700px",
        height: "850px",
        // margin: "50px 200px",
        minWidth: "380px",
        width: "1400px",
        // border: "1px solid black",
        border: "0.5px solid #dadce0",
      }}
    >
      {dates.map((t, i) => {
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
            <div
              style={{
                fontSize: "12px",
              }}
            >
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
              <div
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="date-div"
              >
                {t}{" "}
                {t === 1 &&
                  (i < 7
                    ? format(
                        new Date(getYear(viewDate), getMonth(viewDate)),
                        "MMM"
                      )
                    : format(
                        new Date(
                          getYear(viewDate),
                          getMonth(addMonths(viewDate, 1))
                        ),
                        "MMM"
                      ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyView;
