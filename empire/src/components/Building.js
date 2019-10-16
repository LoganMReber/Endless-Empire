import React from 'react';

const Building = props => {
    return (
        <>
        <h2>{props.building.name}: {props.building.amount}</h2>
        <p>{props.building.desc}</p>
        </>
    );
}

export default Building;