import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DatePicker from "./pages/DatePicker/DatePicker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DatePicker/>}/>
      </Routes>
    </Router>
  );
}

export default App
