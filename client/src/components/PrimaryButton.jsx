import React from "react";
import "../styles/PrimaryButton.css";

function PrimaryButton({ label, action, type }) {
  return (
    <button className={`btn ${type}`} onClick={action}>
      {label}
    </button>
  );
}

export default PrimaryButton;