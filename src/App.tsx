import Calendar from "./components/Calendar";
import MonthlyView from "./components/MonthlyView";
import "./App.css";
import { useState } from "react";

function App() {
  const [viewDate, setViewDate] = useState(new Date());
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Calendar viewDate={viewDate} />
      <MonthlyView viewDate={viewDate} />
    </div>
  );
}

export default App;
