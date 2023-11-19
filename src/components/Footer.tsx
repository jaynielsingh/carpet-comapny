import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-3  text-center bg-amber-950">
        <p>E & B Carpets © {new Date().getFullYear()}</p> Created By {""}
        <a className="text-sm p-1 text-amber-600" href="https://www.jayniel.com">Jayniel Singh</a>{" "}
      </footer>
    </div>
  );
};

export default Footer;
