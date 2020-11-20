import React from "react";
import "./Pokemon.scss";
import PropTypes from "prop-types";

class Pokemons extends React.Component {
  render() {
    const TypesPokemon = this.props.types.map((eachPokemon, index) => (
      <li className="types" key={index}>
        {eachPokemon}
      </li>
    ));

    return (
      <article className="card">
        <img src={this.props.img} alt={this.props.name}></img>
        <h3 className="title">{this.props.name}</h3>
        <ul className="listType">{TypesPokemon}</ul>
      </article>
    );
  }
}

Pokemons.defaultProps = {
  name: "Pokemon desconocido",
  image:
    "https://vignette.wikia.nocookie.net/fakemon/images/e/ec/Desconocido_Pokemon.png/revision/latest?cb=20100712010254&path-prefix=es",
};

Pokemons.propTypes = {
  name: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemons;
