import React from 'react';

function TravelOptions() {
  return (
    <div style={boxStyle}>
      <div style={{
        backgroundColor: 'rgb(31, 81, 255)',
        width: '47vh',
        color: 'white',
        height: '40px',
        borderRadius: '5px',
        padding: '7px',
      }}>
        <p style={{marginLeft: '-10px'}}><b>NEPAL TROUR OPTIONS</b></p>
      </div>

      <div style={smallBox}>
        <b>Trekking in Nepal</b>
        <br />
      </div>
    </div>
  );
}

const boxStyle = {
  backgroundColor: '#fff',
  color: '#000',
  padding: '7px',
  borderRadius: '5px',
  textAlign: 'center',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  marginLeft: '75%',
  marginBottom: '0%'
};

const smallBox = {
    backgroundColor: '#fff',
    color: '#000',
    width: '47vh',
    padding: '7px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    marginBottom: '0%',
    marginRight: '10%',
    marginTop: '1vh',
    borderBottom: '1px solid black', // Add border at the bottom only
    borderLeft: 'none', // Hide left border
    borderRight: 'none', // Hide right border
    borderTop: 'none', // Hide top border
  };
  

export default TravelOptions;
