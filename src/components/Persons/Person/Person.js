import React from "react";
// import "./Person.css";
import styled from "styled-components";
// import Radium from "radium";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 2px solid blueviolet;
  box-shadow: 0 3px red;
  padding: 16px;
  text-align: center;
`;

const person = props => {
  // const personStyle = {
  //   "@media (min-width: 500px)": {
  //     width: "450px"
  //   }
  // };
  return (
    // <div className="Person" style={personStyle}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm a {props.name} and i m {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
    // </div>
  );
};

export default person;
// export default Radium(person);
