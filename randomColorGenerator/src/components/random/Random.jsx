import { useEffect, useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#0000000");

  function handleHex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexcode = "#";

    for (let i = 0; i < 6; i++) {
      let randonNum = Math.floor(Math.random() * hex.length);
      hexcode += hex[randonNum];
    }
    setColor(hexcode);
    console.log(hexcode);
  }
  function handleRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeofColor === "rgb") handleHex();
    else handleRgb();
  }, [typeofColor]);

  return (
    <>
      <div
        className="con"
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div className="clicks">
          <button onClick={() => setTypeofColor("hex")}>
            Create Hex Color
          </button>
          <button onClick={() => setTypeofColor("rgb")}>
            Create RGB Color
          </button>
          <button onClick={typeofColor === "hex" ? handleHex : handleRgb}>
            Generate Random Color
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
          }}
        >
          <h3>{typeofColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}
