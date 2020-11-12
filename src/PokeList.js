import React from "react";
import Pokemon from "./Pokemon";
import "./Pokemon.scss";
import "./PokeList.scss";

class PokeList extends React.Component {
  //this.props.data

  //recorro con map

  render() {
    const arrayPokemon = this.props.data.map((eachPokemon) => (
      <Pokemon
        name={eachPokemon.name}
        img={eachPokemon.url}
        types={eachPokemon.types}
      ></Pokemon>
    ));

    return <ul className="boxList">{arrayPokemon}</ul>;
  }
}

PokeList.propTypes = {};
export default PokeList;
