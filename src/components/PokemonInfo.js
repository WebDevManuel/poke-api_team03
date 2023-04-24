import React, { useState, useEffect } from "react";

function PokemonInfo() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      const data = await response.json();
      setPokemonData(data);
    }
    fetchPokemonData();
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const stats = pokemonData.stats.map((stat) => {
    return {
      name: stat.stat.name,
      baseStat: stat.base_stat,
    };
  });

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <ul>
        {stats.map((stat) => (
          <li key={stat.name}>
            {stat.name}: {stat.baseStat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonInfo;
