import React from "react";
import "./MenuStyle.css";
function Menu() {
    return (
        <div>
            <header>
                <div className="logoContainer">
                <img className="pokeLogo" src={pokeLogo} alt="logo Pokemon" />
                </div>
                    <h1 className="typetext">Type</h1>
            </header>
            <div className="types-container">
                <div >
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
                </div>
            </div>
                    <section className="search">
                    <button>Search</button>
                    </section>
            <footer>
                <p>© 2021 Pokémon. © 1995-2021 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.</p>
            </footer>
        </div>
    );
}
export default Menu;