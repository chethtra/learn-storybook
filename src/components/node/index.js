import React from 'react';

const container = {
    width: '20%',
    padding: '0 20px 10px 20px',
    border: '1px rgba(0,0,0,0.2) solid',
    display: 'inline-flex',
    borderRadius: '5px',
    alignItems: 'center',
    textAlign: 'left',
    flexDirection: 'column'
};
const fontStyle = {
    padding: '0',
    margin: '0',
    fontFamily: 'arial',
    fontWeight: '100'
};

const title = {
    ...fontStyle,
    color: 'black',
    marginTop: '10px'
};

const milestone = {
    ...fontStyle,
    color: 'white',
    fontWeight: '200'
}

const subContainer = {
    width: '100%',
    height: '100%',
}

const milestoneContainer = {
    ...subContainer,
    backgroundColor: 'red',
    padding: '10px 20px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
}

const contentContainer = {
    ...subContainer
}


export const Node = (props) =>{
    return(
        <>
            <div style={container}>
                <div style={milestoneContainer}>
                    <h1 style={milestone}>{props.milestone}</h1>
                </div>
                <div style={contentContainer}>
                    <h2 style={title}>{props.title}</h2>
                </div>
            </div> 
        </>
    )
}