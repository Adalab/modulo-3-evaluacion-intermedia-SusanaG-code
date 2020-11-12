import React from "react";
import "./Pokemon.scss";

class Pokemons extends React.Component {
  render() {
    const TypesPokemon = this.props.types.map((eachPokemon) => (
      <li>{eachPokemon}</li>
    ));
    console.log(TypesPokemon.types);

    return (
      <article className="card">
        <img src={this.props.img} alt=""></img>
        <h3>{this.props.name}</h3>
        <ul className="listType">
          <li>{TypesPokemon}</li>
        </ul>
      </article>
    );
  }
}

Pokemons.propTypes = {};
export default Pokemons;
