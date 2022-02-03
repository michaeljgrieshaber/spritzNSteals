import "./App.css";
import { Routes, Route } from "react-router-dom";
import Stealz from "./Screens/Stealz/Stealz";
import Spritz from "./Screens/Spritz/Spritz";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <div className="App">
      <div></div>
      <Routes>
        <Route path="/spritz" element={<Spritz />} />
        <Route path="/stealz" element={<Stealz />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
