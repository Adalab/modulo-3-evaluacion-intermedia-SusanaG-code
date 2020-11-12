import React from "react";
import "./Pokemon.scss";

class Pokemons extends React.Component {
  render() {
    const TypesPokemon = this.props.types.map((eachPokemon, index) => (
      <li className="types" key={index}>
        {eachPokemon}
      </li>
    ));

    return (
      <article className="card">
        <img src={this.props.img} alt="Pokemon"></img>
        <h3 className="title">{this.props.name}</h3>
        <ul className="listType">{TypesPokemon}</ul>
      </article>
    );
  }
}

export default Pokemons;
