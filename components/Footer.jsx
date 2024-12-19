import React from "react";

const Footer = () => {
  return (
    <div className="h-16 bg-purple-600 flex justify-between items-center">
      <footer className="container mx-auto px-4 ">
        <span>All right reserved. &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
};

export default Footer;
