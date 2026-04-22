import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-bar">
      Built with ❤️ by <span>Bhavesh Purohit</span> &mdash; {new Date().getFullYear()}
    </footer>
  );
};
