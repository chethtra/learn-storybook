import React from 'react';

const container = {
    width: '100vw',
    height: '20vh',
    backgroundColor: '#ecf0f1',
    display: 'flex'
};

const percentageText = {
    'textAlign': 'center',
    'display' : 'block',
    'fontFamily': 'Helvetica',
    'color' : '#ecf0f1',
    fontWeight: 700,

}

const setOrMaxPercenatge = (percentage) => (percentage > 100)? 100 : percentage

export const BarGraph = (props) => {
    const bar  = (percentage, arrayLength) => ({
        backgroundColor: '#c0392b',
        width: `${100/arrayLength}vw`,
        height: `${setOrMaxPercenatge(percentage)}%`,
        border: '0.5px solid #7f8c8d',
        display: 'inline-block',
        alignSelf:'flex-end'
    });

    return(
        <>
            <div style={container}>
               { props.percentages.map((p) => <div style={bar(p,  props.percentages.length)}>
                   <span style={percentageText}>{setOrMaxPercenatge(p)}%</span>
               </div>)}
            </div>

        </>
    )
}