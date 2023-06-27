import { useState } from "react";
import "./App.css";
import Socials from "./components/Socials";
import Content from "./components/Content";

function App() {
  return (
    <div className="dark:bg-backgroundPrimary dark:text-white">
      <Content />
      <Socials />
    </div>
  );
}

export default App;
