import React from 'react';

const maxLength = 30;
const items = [1, 2, 15, 6, 7, 9, 25, 30];
const itemWidth = 2;

const container = {
  display: 'flex',
  backgroundColor : '#ecf0f1',
  flexDirection: 'row',
  height: '100px',
  alignItems: 'center'
};

const itemStyle = (pos) =>{
  const itemPosition = Math.floor((pos)/maxLength * 100)-itemWidth;

  return {
    position: 'absolute',
    left: `${itemPosition}%`,
    backgroundColor: '#34495e',
    width: `${itemWidth}%`,
    color: 'white',
    height: '100%',
    textAlign: 'center'
  }
}

const itemContainer = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  backgroundColor: '#e74c3c',
  listStyleType: 'none',
  height: '20%',
  margin: '0',
  padding: '0',
}


export const Timeline = (props) =>{

  return(
    <>
      <div style={container}>
        <ul style={itemContainer}>
          {items.map((i)=> <li key={i} style={itemStyle(i)}>{i}</li>)}
        </ul>
      </div>
    </>
  )
}