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
  subMonths,
} from "date-fns";
import { useState } from "react";
import EventDialog from "./EventDialog";
import PrevIcon from "./PrevIcon";
import NextIcon from "./NextIcon";

const Calendar = ({
  viewDate,
  setViewData,
  isCalendarView = true,
}: {
  viewDate: Date;
  setViewData: (date: Date) => void;
  isCalendarView: boolean;
}) => {
  // const test = Array(35)
  //   .fill(1)
  //   .map((t, i) => t * i + 1);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array(getDaysInMonth(viewDate))
    .fill(1)
    .map(
      (t, i) =>
        `${getYear(viewDate)}-${
          (getMonth(viewDate) + 1).toString().length === 1
            ? "0" + (getMonth(viewDate) + 1)
            : getMonth(viewDate) + 1
        }-${
          (t * i + 1).toString().length === 1 ? "0" + (t * i + 1) : t * i + 1
        }`
    );

  const numOfPrevDays = Array(getDay(startOfMonth(viewDate))).fill(1);
  const prevDays = numOfPrevDays.map((d, i) =>
    format(
      subDays(startOfMonth(viewDate), d * (numOfPrevDays.length - i)),
      "yyyy-MM-dd"
    )
  );
  const prevRange = [0, prevDays.length - 1];
  dates.unshift(...prevDays);

  // if (arr.length < 35) {
  const numOfNextDays = Array(6 - getDay(endOfMonth(viewDate))).fill(1);
  const nextDays = numOfNextDays.map((d, i) =>
    format(addDays(endOfMonth(viewDate), d * (i + 1)), "yyyy-MM-dd")
  );
  // }
  const nextRange = [dates.length, dates.length + nextDays.length];
  dates.push(...nextDays);

  // console.log(getDay(startOfMonth(new Date())));
  // console.log(getDate(subDays(startOfMonth(new Date()), 5)));
  // console.log(startOfMonth(new Date()));

  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [clickedDate, setClickedDate] = useState("");

  interface Task {
    id: string;
    color: number[];
    name: string;
    from: string;
    to: string;
  }

  const [events, setEvents] = useState<Task[]>([]);
  // console.log(events);
  // console.log(dates);

  return (
    <div
      style={
        isCalendarView
          ? {
              borderTop: "1px solid #dadce0",
            }
          : {
              // margin: "50px 200px",
              minWidth: "380px",
              width: "100%",
            }
      }
    >
      {isCalendarView && (
        <div
          style={{
            padding: "50px 33px 10px 25px",
            display: "flex",
            justifyContent: "space-between",
            minWidth: "190px",
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
              <PrevIcon />
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
              <NextIcon />
            </button>
          </div>
        </div>
      )}

      <div
        style={
          isCalendarView
            ? {
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                height: "190px",
                // margin: "50px 200px",
                padding: "10px 30px 0 20px",
              }
            : {
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",

                // border: "1px solid black",
                border: "0.5px solid #dadce0",
                // minHeight: "700px",
                // height: "850px",
                height: "100%",
              }
        }
      >
        {dates.map((t, i) => {
          return (
            <div
              key={i}
              style={
                isCalendarView
                  ? {
                      //   border: "1px solid #dadce0",
                      //   display: "flex",
                      justifyContent: "center",
                      paddingTop: "5px",
                      textAlign: "center",
                      fontSize: "10px",
                    }
                  : {
                      border: "0.5px solid #dadce0",
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "20px",
                      textAlign: "center",
                      fontSize: "12px",
                    }
              }
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {i < 7 && (
                  <div
                    style={{
                      color: "#70757a",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      marginBottom: isCalendarView ? "18px" : "0px",
                    }}
                  >
                    {isCalendarView ? days[i][0] : days[i]}
                  </div>
                )}
                <button
                  id={t}
                  style={{
                    width: isCalendarView ? 25 : 35,
                    height: isCalendarView ? 25 : 35,
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    padding: 0,
                    opacity: i > prevRange[1] && i < nextRange[0] ? 1 : 0.5,
                  }}
                  className={
                    getMonth(new Date()) === getMonth(viewDate) &&
                    getDate(new Date(t)) === getDate(new Date()) &&
                    i > prevRange[1] &&
                    i < nextRange[0]
                      ? isCalendarView
                        ? "curr-date-div sm-date"
                        : "curr-date-div lg-date"
                      : isCalendarView
                      ? "date-div sm-date"
                      : "date-div lg-date"
                  }
                  onClick={
                    !isCalendarView
                      ? (
                          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                        ) => {
                          setIsEventDialogOpen(true);
                          setClickedDate((e.currentTarget as Element).id);
                        }
                      : () => {}
                  }
                >
                  {getDate(new Date(t))}
                  {!isCalendarView &&
                    getDate(new Date(t)) === 1 &&
                    (i < 7
                      ? " " +
                        format(
                          new Date(getYear(viewDate), getMonth(viewDate)),
                          "MMM"
                        )
                      : " " +
                        format(
                          new Date(
                            getYear(viewDate),
                            getMonth(addMonths(viewDate, 1))
                          ),
                          "MMM"
                        ))}
                </button>
                {!isCalendarView &&
                  events
                    .filter(
                      (e) =>
                        new Date(t) >= new Date(e.from) &&
                        new Date(t) <= new Date(e.to)
                    )
                    .map((e) => {
                      return (
                        <div
                          style={{
                            // height: "10px",
                            padding: "5px 0px",
                            width: "100%",
                            marginTop: "10px",
                            background: `rgb(${e.color[0]}, ${e.color[1]}, ${e.color[2]})`,
                            color:
                              e.color.filter((c) => c >= 230).length > 1
                                ? "black"
                                : "white",
                            border: `0.5px solid rgb(${e.color[0]}, ${e.color[1]}, ${e.color[2]})`,
                          }}
                        >
                          {e.name.toString().length > 15
                            ? e.name.toString().slice(0, 15) + "..."
                            : e.name.toString()}
                        </div>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
      <EventDialog
        isOpen={isEventDialogOpen}
        setIsOpen={setIsEventDialogOpen}
        viewDate={viewDate}
        clickedDate={clickedDate}
        events={events}
        setEvents={setEvents}
      />
    </div>
  );
};

export default Calendar;
