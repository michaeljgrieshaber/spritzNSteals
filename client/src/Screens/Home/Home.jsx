import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="home">
      <Link to="/spritz">
      <img
        src="https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="spritz pour"
        />
      </Link>
      <Link to="/stealz">
      <img
        src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        alt="stealz items"
      />
      </Link>
    </div>
  );
}
