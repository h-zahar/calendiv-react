import Calendar from "./components/Calendar";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [viewDate, setViewDate] = useState(new Date());
  return (
    <div style={{ height: "100vh" }}>
      <Header viewDate={viewDate} setViewData={setViewDate} />
      <div style={{ display: "flex", width: "100%", height: "90.5%" }}>
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
