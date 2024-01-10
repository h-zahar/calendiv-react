import Calendar from "./components/Calendar";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [viewDate, setViewDate] = useState(new Date());
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "12%" }}>
        <Header viewDate={viewDate} setViewData={setViewDate} />
      </div>
      <div style={{ display: "flex", width: "100%", height: "88%" }}>
        <Calendar
          viewDate={viewDate}
          setViewData={setViewDate}
          isCalendarView={true}
        />
        <Calendar
          viewDate={viewDate}
          setViewData={setViewDate}
          isCalendarView={false}
        />
        <div style={{ borderTop: "0.5px solid #dadce0", width: "50px" }}></div>
      </div>
    </div>
  );
}

export default App;
