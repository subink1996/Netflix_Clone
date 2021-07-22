import "./Nav.css";
import { useState, useEffect } from "react";
const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="./Logo/Netflix..png" alt="Netflix Logo" />
      <img
        className="nav__avatar"
        src="./Logo/Netflix_Smile.png"
        alt="Smiley"
      />
    </div>
  );
};

export default Nav;
