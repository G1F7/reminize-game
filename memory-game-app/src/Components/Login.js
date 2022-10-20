import React from "react";

class Login extends React.Component {
  state = {};
  /*A built in function to keep track of the changes 
  inside the input field while storing the 
  information in state.*/

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label
                style={{
                  color: "white",
                  fontSize: "28px",
                  fontFamily: "fantasy",
                }}
              >
                Enter Your Name
              </label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <small
                className="form-text text-muted"
                style={{
                  color: "white",
                  fontSize: "19px",
                  fontFamily: "fantasy",
                }}
              >
                This is a memory game
              </small>
            </div>

            <button onClick={this.handleClick} className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
