import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayPeople from './DisplayPeople';

const People = () => {
    const [thePeople, setThePeople] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
          .then(res => {
            const allThePeople = res.data.results;
            console.log(res);
            setThePeople(allThePeople);
          })
          .catch(err => console.log(`Error! ${err}`))
      }, [])

    return (  
        <div>
            {thePeople.map((person, index) => {
                console.log(<DisplayPeople key={index} name={person.name} height={person.height} gender={person.gender} mass={person.mass} />)
                return <DisplayPeople key={index} name={person.name} height={person.height} gender={person.gender} mass={person.mass} />
            })}
        </div>
    )
}

export default People;