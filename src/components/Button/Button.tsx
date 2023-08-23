import { ButtonHTMLAttributes } from "react";
import "../Button/Button.css";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className="Button"></button>;
};

export default Button;
