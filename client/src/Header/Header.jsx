import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";


export default function Header() {
  return <div className="header">
    <Link to="/" className="headerLink">
    <h1>SpritznStealz</h1>
    </Link>
  </div>;
}
