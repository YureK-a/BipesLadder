import React from "react";
import ItemMenu from "./ItemMenu";
import PropTypes from 'prop-types';

const Menu = (props) => {
  const style = {};

  return (
    <g style={style}>
      <ItemMenu
        onClick={() => props.startSimulator()}
        text="Modo Básico"
        index="0"
      />
      <ItemMenu
        onClick={() => console.log("Modo Projeto")}
        text="Modo Projeto"
        index="1"
      />
      <ItemMenu
        onClick={() => console.log("Modo Criação")}
        text="Modo Criação"
        index="2"
      />
    </g>
  );
};

Menu.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Menu;
