import React from "react";
import Pokemon from "./Pokemon";
import "./Pokemon.scss";
import "./PokeList.scss";

class PokeList extends React.Component {
  //this.props.data

  render() {
    const arrayPokemon = this.props.data.map((eachPokemon) => (
      <Pokemon
        key={eachPokemon.id}
        name={eachPokemon.name}
        img={eachPokemon.url}
        types={eachPokemon.types}
      ></Pokemon>
    ));

    return <ul className="boxList">{arrayPokemon}</ul>;
  }
}

export default PokeList;
