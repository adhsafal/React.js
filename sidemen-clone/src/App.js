import React from "react";
import "./App.css";
import News from "./Components/News";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <News />
      </div>
    </>
  );
}

export default App;
