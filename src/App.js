import React from "react";
import isdarkmode from "./helpers/darkmodeHelper";
import AppRouter from "./router";
import "./App.css";

function App() {
  return (
    <div className={`App ${isdarkmode() ? "dark-mode" : ""}`}>
      <AppRouter />
    </div>
  );
}

export default App;
