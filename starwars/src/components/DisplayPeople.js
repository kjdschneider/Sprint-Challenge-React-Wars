import React from 'react';
import styled from 'styled-components';

const StarWarsCard = styled.div`
    width: 30%;
    background: black;
    border: 2px solid white;
    border-radius: 10px;
    margin: 20px;
    padding: 5px;
`

const Name = styled.h2`
    font-size: 30px;
    text-align: center;
    color: white;
`

const Info = styled.p`
    font-size: 14px;
    text-align: left;
    color: white;
`

const DisplayPeople = props => {
    console.log(props);
    return (
        <StarWarsCard>
            <Name>{props.name}</Name>
            <Info>Gender: {props.gender}<br/>Height: {props.height}cm<br/>Weight: {props.mass}kg</Info>
        </StarWarsCard>
    )
}

export default DisplayPeople;