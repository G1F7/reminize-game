import React from "react";
import { messages } from "./Messages";

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    messages.sort(() => Math.random() - 0.5);
    return (
      <div className="end-game">
        <div className="message">
          <h2 style={{ color: "white" }}>{messages[0].title}</h2>
          <p style={{ color: "white" }}>{messages[0].message}</p>
          <button className="btn btn-success" onClick={this.handleClick}>
            Go Again
          </button>
        </div>
      </div>
    ); /*The above Component pretty works much the same as the login component, 
    by displaying messages if the user is not makinig any progress on the game.*/
  }
}

export default EndGame;
