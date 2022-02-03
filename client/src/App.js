import "./App.css";
import { Routes, Route } from "react-router-dom";
import Stealz from "./Screens/Stealz/Stealz";
import Spritz from "./Screens/Spritz/Spritz";
import Home from "./Screens/Home/Home";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spritz" element={<Spritz />} />
        <Route path="/stealz" element={<Stealz />} />
      </Routes>
      
    </div>
  );
}

export default App;
