import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="game-title">Reminize</div>
        <div className="name">{name}</div>
        <div className="score">Score: {score}</div>
      </div>
    ); //This is the 'Navbar' Component that will show the available content above.
  }
}

export default Navbar;
