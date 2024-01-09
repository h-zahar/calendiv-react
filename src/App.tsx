import Calendar from "./components/Calendar";
import MonthlyView from "./components/MonthlyView";
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
          isCalendar={true}
        />
        <Calendar
          viewDate={viewDate}
          setViewData={setViewDate}
          isCalendar={false}
        />
        {/* <MonthlyView viewDate={viewDate} /> */}
      </div>
    </div>
  );
}

export default App;
