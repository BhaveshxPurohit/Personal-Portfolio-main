import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header center">
      <a href="#home" className="header__logo">
        &lt;Bhavesh /&gt;
      </a>
      <Navbar />
    </header>
  );
};
