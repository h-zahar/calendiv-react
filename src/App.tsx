import Calendar from "./components/Calendar";
import MonthlyView from "./components/MonthlyView";

function App() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Calendar />
      <MonthlyView />
    </div>
  );
}

export default App;
