import { addMonths, format, subMonths } from "date-fns";

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
        padding: "10px 20px",
        margin: "0 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2>CalenDiv</h2>
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
            }}
          >
            <p
              style={{
                padding: "15px",
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
            {/* <p
              style={{
                padding: "15px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            > */}
            {">"}
            {/* </p> */}
          </button>

          <div>{format(viewDate, "MMMM yyyy")}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
