import React from "react";
import { images } from "./Images/Index";

class Images extends React.Component {
  characters = [];
  handleClick = (event) => {
    let character = event.target;
    if (character.getAttribute("check") === "found") {
      return;
    } /*The above 'handleCick' function is responsible for 'check', and 'found' value, therefore if both decks are faced down, 
    then the array will not be called, but if both decks are faced up and evenly macthed, 
    then 'handleClick' function will call the 'found' value which will set the statement true.*/

    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
    }

    if (this.characters.length > 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0]);
        this.switch(this.characters[1]);
        this.characters.shift();
        this.characters.shift();
      } else {
        this.characters.shift();
        this.characters.shift();
      }
    }
    let allPictures = document.getElementsByClassName("image-blank");
    if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
      }
    }
  };

  checkName = (character1, character2) => {
    /* 'Check' value has been created to 
    check whether the card has been 
    flipped, has a pair, or has not been flipped.*/
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    } //Once two decks match, then the statement becomes true.
    return false;
  }; //But if there's two different decks, then the statement becomes false, therefore the cards won't match.

  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  }; /*The created function above is used for facing the cards backwards, therefore I added className='image-blank' 
     which means the cards will be faced backwards once the game has started.*/
  //
  render() {
    return (
      <div className="images">
        {images
          .sort(() => Math.random() - 0.5)
          .map((element) => {
            return (
              <div
                className="image image-blank"
                name={element.name}
                style={{ background: `url(${element.pic})` }}
                check="false"
                onClick={this.handleClick}
              />
            ); /*Once the deck has been clicke on, 
               the class will then be removed whenever we 
               click on the images, which will show the 
               cards instead of the back.*/
          })}
      </div>
    );
  }
}
export default Images;
