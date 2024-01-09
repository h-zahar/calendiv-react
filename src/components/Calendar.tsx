import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  getDate,
  getDay,
  getDaysInMonth,
  getMonth,
  startOfMonth,
  subDays,
  subMonths,
} from "date-fns";

const Calendar = ({
  viewDate,
  setViewData,
}: {
  viewDate: Date;
  setViewData: (date: Date) => void;
}) => {
  // const test = Array(35)
  //   .fill(1)
  //   .map((t, i) => t * i + 1);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array(getDaysInMonth(viewDate))
    .fill(1)
    .map((t, i) => t * i + 1);

  const numOfPrevDays = Array(getDay(startOfMonth(viewDate))).fill(1);
  const prevDays = numOfPrevDays.map((d, i) =>
    getDate(subDays(startOfMonth(viewDate), d * (numOfPrevDays.length - i)))
  );
  const prevRange = [0, prevDays.length - 1];
  dates.unshift(...prevDays);

  // if (arr.length < 35) {
  const numOfNextDays = Array(6 - getDay(endOfMonth(viewDate))).fill(1);
  const nextDays = numOfNextDays.map((d, i) =>
    getDate(addDays(startOfMonth(viewDate), d * i))
  );
  // }
  const nextRange = [dates.length, dates.length + nextDays.length];
  dates.push(...nextDays);

  // console.log(getDay(startOfMonth(new Date())));
  // console.log(getDate(subDays(startOfMonth(new Date()), 5)));
  // console.log(startOfMonth(new Date()));

  return (
    <div
      style={{
        minWidth: "190px",
        borderTop: "1px solid #dadce0",
      }}
    >
      <div
        style={{
          padding: "50px 30px 10px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {format(viewDate, "MMMM yyyy")}
        <div>
          <button
            onClick={() => setViewData(subMonths(viewDate, 1))}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {/* <p
              style={{
                padding: "15px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            > */}
            {"<"}
            {/* </p> */}
          </button>

          <button
            onClick={() => setViewData(addMonths(viewDate, 1))}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          height: "190px",
          // margin: "50px 200px",
          padding: "10px 30px 0 20px",
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
                  className={
                    getMonth(new Date()) === getMonth(viewDate) &&
                    t === getDate(new Date()) &&
                    i > prevRange[0] &&
                    i < nextRange[0]
                      ? "curr-date-div"
                      : "date-div"
                  }
                >
                  {t}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
