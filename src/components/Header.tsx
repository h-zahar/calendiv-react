import { addMonths, format, subMonths } from "date-fns";
import PrevIcon from "./PrevIcon";
import NextIcon from "./NextIcon";

const Header = ({
  viewDate,
  setViewData,
}: {
  viewDate: Date;
  setViewData: (date: Date) => void;
}) => {
  return (
    <div
      style={{
        padding: "0px 20px",
        // margin: "0 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div style={{ minWidth: 175 }}>
        <h2 style={{ textAlign: "center" }}>CalenDiv</h2>
      </div>
      <div style={{ flex: 1, marginLeft: 20 }}>
        <div
          style={{ display: "flex", alignItems: "center", fontSize: "22px" }}
        >
          <button
            onClick={() => setViewData(new Date())}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              marginRight: 20,
            }}
          >
            <p
              style={{
                padding: "10px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              Today
            </p>
          </button>
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
            {/* <p
              style={{
                padding: "15px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            > */}
            <NextIcon />
            {/* </p> */}
          </button>

          <div>{format(viewDate, "MMMM yyyy")} </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
