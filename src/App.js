import "./App.css";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Search from "./components/Search";
// import Menu from "./pages/Menu";

//dark/light


function App() {
  return (
    <div
      className="App"

    >
      <Routes>
        <Route path="/" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;