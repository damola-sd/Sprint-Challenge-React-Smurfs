import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';

const SmurfsDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;



class Smurfs extends Component {
  render() {
    return (
      <SmurfsDiv>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete = {this.props.delete}
              />
            );
          })}
        </ul>
      </SmurfsDiv>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
