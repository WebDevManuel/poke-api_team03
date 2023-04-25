import "./App.css";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//components
import Search from "./components/Search";

//pages
import Type from "./pages/Type";
import TypeResults from "./pages/TypeResults";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Search />}></Route>
                <Route path="/type" element={<Type />}></Route>
                <Route path="/typeresults/:pokeType" element={<TypeResults />}></Route>
            </Routes>
        </div>
    );
}

export default App;