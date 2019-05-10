import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "847318130233-8ksjuesn2j3v2tn0trfkcsdot9fd4g4v.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
