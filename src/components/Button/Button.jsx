import css from "./Button.module.css";
import { useState } from "react";

export const Button = ({ message, children }) => {
  // let clicks = 0;
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={css.button} onClick={handleClick}>
        Current: {clicks}
      </button>
      <button className={css.button} onClick={handleToggle}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};

export default Button;
