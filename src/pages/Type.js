import { useState, useEffect } from "react";

import "../css/TypeStyle.css";
import TypeItem from "../components/TypeItem";
function Type() {
    const [types, setTypes] = useState([]);
    // map types
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(json => {
                // setTypes(json.results[3].name);
                setTypes(json.results);
                /* const typeFilter = types.filter((elt)=>{
                    return elt.name==
                }) */
            })
    }, []);

    //filterfunction hier einfügen
    // auf das result des filters drüber mappen 



    // console.log(typeof types);
    // console.log(types);

    return (
        <div className="types-container">
            {/* <h2>Type</h2> */}
            {types.map((type, i) => {
                return (
                    // console.log(type.name)
                    <TypeItem
                        key={i}
                        name={type.name}
                    />
                )
            })}





            {/* <div >
                    <button className="bug">Bug</button>
                </div>
                <div >
                    <button className="dark">Dark</button>
                </div>
                <div >
                    <button className="dragon">Dragon</button>
                </div>
                <div >
                    <button className="electric">Electric</button>
                </div>
                <div >
                    <button className="fairy">Fairy</button>
                </div>
                <div >
                    <button className="fighting">Fighting</button>
                </div>
                <div >
                    <button className="fire">Fire</button>
                </div>
                <div >
                    <button className="flying">Flying</button>
                </div>
                <div >
                    <button className="ghost">Ghost</button>
                </div>
                <div >
                    <button className="grass">Grass</button>
                </div>
                <div >
                    <button className="ground">Ground</button>
                </div>
                <div >
                    <button className="ice">Ice</button>
                </div>
                <div >
                    <button className="normal">Normal</button>
                </div>
                <div >
                    <button className="plant">Plant</button>
                </div>
                <div >
                    <button className="poison">Poison</button>
                </div>
                <div >
                    <button className="psychic">Psychic</button>
                </div>
                <div >
                    <button className="rock">Rock</button>
                </div>
                <div >
                    <button className="steel">Steel</button>
                </div>
                <div >
                    <button className="water">Water</button>
                </div> */}
        </div>
    );
}
export default Type;