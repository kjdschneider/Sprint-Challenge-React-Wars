import React from 'react';
import {
    Card, CardTitle, CardSubtitle,
  } from 'reactstrap';

const DisplayPeople = props => {
    console.log(props);
    return (
        <div>
            <Card>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Gender: {props.gender} | Height: {props.height}cm | Weight: {props.mass}kg</CardSubtitle>
            </Card>
        </div>
    )
}

export default DisplayPeople;