import React from "react";
import useLocalStorage from "./useLocalStorage";

function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToogle() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>Hello</p>
        <button onClick={handleToogle}> Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
