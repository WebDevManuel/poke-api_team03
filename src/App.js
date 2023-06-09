import "./App.css";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//components
import Search from "./components/Search";
import Num0 from "./components/Num0";
import Num1 from "./components/Num1";
import Num2 from "./components/Num2";
import Num3 from "./components/Num3";
import Num4 from "./components/Num4";
import Num5 from "./components/Num5";
// import Menu from "./pages/Menu";

//pages
import Type from "./pages/Type";
import TypeResults from "./pages/TypeResults";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Search />}></Route>
                <Route path="/num0" element={<Num0 />}></Route>
                <Route path="/num1" element={<Num1 />}></Route>
                <Route path="/num2" element={<Num2 />}></Route>
                <Route path="/num3" element={<Num3 />}></Route>
                <Route path="/num4" element={<Num4 />}></Route>
                <Route path="/num5" element={<Num5 />}></Route>
                <Route path="/type" element={<Type />}></Route>
                <Route path="/typeresults/:pokeType" element={<TypeResults />}></Route>
            </Routes>
        </div>
    );

}

export default App;
