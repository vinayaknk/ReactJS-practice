import React, { Component } from "react";
import classes from "./App.css";
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";
import Humans from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "vnk", age: 28 },
      { id: "124", name: "vk", age: 29 },
      { id: "125", name: "vnkn", age: 30 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const abcIndex = this.state.persons.findIndex(p => {return p.id === id;});
    const human = { ...this.state.persons[abcIndex] };
    human.name = event.target.value;

    const newpersons = [...this.state.persons];
    newpersons[abcIndex] = human;

    this.setState({ persons: newpersons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonsHandler = personIndex => {
    const abc = [...this.state.persons];
    abc.splice(personIndex, 1);
    this.setState({ persons: abc });
  };

  render() {
    let humans = null;
    let btnClass = "";
    if (this.state.showPersons) {
      humans = (
        <Humans
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangeHandler}
        />
      );
      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {humans}
      </div>
    );
  }
}

export default App;
