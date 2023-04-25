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
        </div>
    );
}
export default Type;