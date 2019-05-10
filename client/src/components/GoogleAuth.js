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
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

/* https://developers.google.com/api-client-library/javascript/reference/referencedocs */
