import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

const colors = {
      green: styles.buttonGreen,
      gray: styles.buttonGray,
      blue: styles.buttonBlue,
   };
interface ButtonProps {
   disabled?: boolean;
   color?: keyof typeof colors;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   className?: string;

}

export const Button:React.FC<ButtonProps> = ({ children, disabled, color, onClick, className }) => {
   
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         type="button"
         className={clsx(className, styles.button, colors[color])}
      >
         {children}
      </button>
   );
};
