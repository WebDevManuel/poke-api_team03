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




  const statBarStyle = {
    width: `${stats.baseStat}%`,
    height: "10px",
    backgroundColor: "#fbff26",
    transition: "width 2s ease-in-out",

  };

  return (
    <div className="pokemonInfo">
      <h2>BASE STATS</h2>
      <div className="baseStats">
        {stats.map((stat) => (
          <div key={stat.name}>
            <p>{stat.name}: </p>
            <p>{stat.baseStat}</p>
            <article className="powerBar">
              <div style={{ ...statBarStyle, width: `${stat.baseStat}%` }}></div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonInfo;
