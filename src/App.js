import React, { Component } from "react";

export default class App extends Component {
  mensagem = () => {
    return <h1>Esta é a mensagem.</h1>;
  };

  soma = () => 5 * 2;

  render() {
    return (
      <div>
        <h2>{this.mensagem()}</h2>
        <p>{this.soma()}</p>
      </div>
    );
  }
}
