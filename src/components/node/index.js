import React from 'react';
const containerDimenions = '60px';

const container = () => ({
    borderRadius: containerDimenions,
    width: containerDimenions,
    height: containerDimenions,
    backgroundColor: 'blue'
})


export const Node = (props) =>{
    return(
        <>
            <div style={container()}></div>
        </>
    )
}