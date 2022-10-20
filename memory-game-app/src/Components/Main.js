import React from "react";
import Login from "./Login";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";
import "bootstrap/dist/css/bootstrap.min.css";

//Above I have imported the following Components
//Including React-Bootstrap

class Main extends React.Component {
  state = {
    //Used the state to display the components such as login and endgame.
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  }; //The above state is used for sending over the name of the 'Navbar.js', using the props and by displaying it on the screen.

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  }; //The used functions above are used to display variables such as the score and the username.
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </div>
    ); //In the login componenet, the property 'name' is used to serve the handleLogin function.
  }
}

export default Main;
