import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const TypeResults = () => {
    const [pokemons, setPokemons] = useState([]);
    const location = useLocation();
    console.log(location)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${location.state}`)
            .then((response) => response.json())
            .then((json) => console.log(json));
            // .then((json) => setPokemons(json));
    }, []);

    return (
        <section>
            <p>{location.state}</p>
            {pokemons.map((pokemon)=>{
                return(
                    <p>{pokemon.pokemon.pokemon}</p>
                )
            }
            )}
        </section>
    );
}

export default TypeResults;