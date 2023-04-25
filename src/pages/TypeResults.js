import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const TypeResults = () => {
  const [pokemons, setPokemons] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${location.state}`)
      .then((response) => response.json())
      .then((json) => setPokemons(json.pokemon));
  }, []);

  return (
    <section>
      <p>{location.state}</p>
      {pokemons.map((pokemon, index) => {
        const pokemonId = pokemon.pokemon.url.split("/")[6];
        const myImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
        return (
          <>
            <p key={index}>{pokemon.pokemon.name}</p>
            <img src={myImage} alt={pokemon.name} />
          </>
        );
      })}
    </section>
  );
};

export default TypeResults;
