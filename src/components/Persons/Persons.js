import React from "react";
import Human from "./Person/Person";

const persons = props =>
  props.persons.map((xyz, index) => {
    return (
      <Human
        click={() => props.clicked(index)}
        name={xyz.name}
        age={xyz.age}
        key={xyz.id}
        changed={event => props.changed(event, xyz.id)}
      />
    );
  })  ;

export default persons;
