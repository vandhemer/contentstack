import React from "react";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-page">
        <h1>Perte de connexion</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    );
  }
}