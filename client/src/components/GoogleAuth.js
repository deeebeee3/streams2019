import React from "react";

class GoogleAuth extends React.Component {
  //initialize state object
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "847318130233-8ksjuesn2j3v2tn0trfkcsdot9fd4g4v.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          //once entire gapi library loaded, save a reference to auth object on class
          this.auth = window.gapi.auth2.getAuthInstance();

          //set state to get component to rerender
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });

          //whenever a user signs in/out the gapi listener method will call onAuthChange callback function
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    /* use an arrow function to have correct context available*/
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

/*
    https://developers.google.com/api-client-library/javascript/reference/referencedocs
    gapi.auth2.getAuthInstance().signIn()
*/
