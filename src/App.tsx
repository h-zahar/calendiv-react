import Calendar from "./components/Calendar";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [viewDate, setViewDate] = useState(new Date());
  return (
    <div>
      <Header viewDate={viewDate} setViewData={setViewDate} />
      <div style={{ display: "flex", width: "100%" }}>
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
      </div>
    </div>
  );
}

export default App;
