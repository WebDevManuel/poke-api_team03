import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import pokeLogo from "../images/pokeLogo2.png";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-router-dom";

const Num4 = () => {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState(null);
  const [description, setDescription] = useState("");
  const [light, setLight] = useState(true);
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=120&limit=30")
      .then((response) => response.json())
      .then((json) => setPokemons(json.results));
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(selectedPokemon.url)
        .then((response) => response.json())
        .then((json) => {
          setSelectedPokemonDetails(json);
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${json.id}`)
            .then((response) => response.json())
            .then((json) => {
              setDescription(json.flavor_text_entries[0].flavor_text);
            });
        });
    }
  }, [selectedPokemon]);

  const searchFunction = (e) => {
    const foundPokemon = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === search.toLowerCase()
    );
    if (foundPokemon) {
      foundPokemon.id = foundPokemon.url.split("/").slice(-2)[0];
      setSelectedPokemon(foundPokemon);
    } else {
      setSelectedPokemon(null);
      setSelectedPokemonDetails(null);
      console.log("Pokemon not found");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchFunction();
    }
  };

  const handleGoBack = () => {
    setSelectedPokemon(null);
    setSelectedPokemonDetails(null);
    setDescription("");
    setSearch("");
  };

  return (
    <div
      style={{
        color: light ? "#040532" : "#8298fa",
        backgroundColor: light ? "#8298fa" : "#040532",
        height: "100%",
      }}
    >
      <div className="logoContainer">
        <img className="pokeLogo" src={pokeLogo} alt="logo Pokemon" />
      </div>
      <section className="search-container">
        <CgDarkMode
          className="lightModeButton"
          onClick={() => setLight(!light)}
        >
          Light-Dark
        </CgDarkMode>
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyDown}
        />
        <button onClick={searchFunction}>
          <span className="blinkSearch">Search</span>
          <div className="numbers">
            {numbers.map((num) => {
              return (
                <Link key={num} to={`/num${num}`}>
                  {num}
                </Link>
              );
            })}
          </div>
        </button>
      </section>
      <main>
        <section className="allPokeContainers">
          {selectedPokemonDetails ? (
            <div className="result-container">
              <div className="backButtonContainer">
                <MdOutlineArrowBackIosNew
                  onClick={handleGoBack}
                  className="backButton"
                />
              </div>
              <img
                src={selectedPokemonDetails.sprites.front_default}
                alt={selectedPokemon.name}
              />
              <h1>
                {selectedPokemon.name.charAt(0).toUpperCase() +
                  selectedPokemon.name.slice(1)}
              </h1>
              <h3 style={{ display: "flex", gap: "10px" }}>
                {selectedPokemonDetails.types.map((pokemonType) => (
                  <span key={pokemonType.type.name}>
                    {pokemonType.type.name}
                  </span>
                ))}
              </h3>
              <p>Weight: {selectedPokemonDetails.weight / 10} kg</p>
              <p>Height: {selectedPokemonDetails.height * 10} cm</p>
              <p>
                Moves:{" "}
                {selectedPokemonDetails.abilities
                  .map((abilityMovie) => abilityMovie.ability.name)
                  .join(", ")}
              </p>
              <p>{description}</p>
            </div>
          ) : (
            pokemons &&
            pokemons.map((pokemon, imageIndex) => {
              const pokemonImageNumber = imageIndex + 121;
              const pokemonIdNumber = imageIndex + 121;
              const myImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonImageNumber}.png`;
              const myIdNumber = `${pokemonIdNumber}`.padStart(3, 0);
              return (
                <Link
                  className="pokemon-container"
                  key={pokemon.name}
                  to={pokemon.id}
                >
                  <div
                    className="pokemon-box"
                    style={{
                      backgroundImage: light
                        ? "radial-gradient(circle at 90.56% -7.92%, #ffffff 0, #f3f6ff 12.5%, #dde3fa 25%, #cfd8ff 37.5%, #c1ccfe 50%, #b4c1fe 62.5%, #a1b2ff 75%, #748dfa 87.5%, #5a78ff 100%)"
                        : "radial-gradient(circle at 90.56% -7.92%, #dae0fb 0, #b5c1f4 12.5%, #8d9ee9 25%, #576ed6 37.5%, #3652d1 50%, #132a91 62.5%, #09195d 75%, #040f42 87.5%, #020928 100%)",
                    }}
                    onClick={() => setSelectedPokemon(pokemon)}
                  >
                    <img src={myImageUrl} alt={pokemon.name} />
                    <h1>
                      {pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1)}
                    </h1>
                    <p className="pokemonId">#{myIdNumber}</p>
                  </div>
                </Link>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
};

export default Num4;
