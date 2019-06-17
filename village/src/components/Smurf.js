import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 5px;
  border: 2px inset black;
  border-radius: 10px;
  padding: 20px;
  background-color: goldenrod;
  /* flex-direction: column;
  justify-content: space-around;
  flex-wrap: 2; */

  button {
    padding: 10px;
    border-radius: 8px;
    background-color: lightseagreen;
    cursor: pointer;
  }
`;

const Smurf = props => {
  return (
    <SmurfDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button
        onClick = {() => (props.delete(props.id))}>Banish Smurf from the Village</button>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

