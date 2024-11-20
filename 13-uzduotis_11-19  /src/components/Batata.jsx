import { useState } from "react";
import "./Batata.css";

export default function Batata() {
  const [ButonColor, SetButonColor] = useState(false);
  const chngColor = (props) => {
    SetButonColor(!ButonColor);
    // const ButonName = "Mark as done";
  };

  return (
    <button
      onClick={chngColor}
      type="button"
      className={props.ButonColor ? "btn-danger" : "btn-success"}
    >
      ButonName
    </button>
  );
}
