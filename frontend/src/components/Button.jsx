import clsx from "clsx";
import React from "react";

export const Button = ({ icon,className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      className={clsx("px-3 py-2 outline-none", className)}
    >
     {label} {/* Texte du bouton */}
     {icon && icon}
    </button>
  );
};
