import React from 'react';
import Person from './Person';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Alice Smith',
            age: 25,
        },
        {
            id: 2,
            name: 'Bob Johnson',
            age: 30,
        },
        {
            id: 3,
            name: 'Charlie Brown',
            age: 28,
        },
        {
            id: 4,
            name: 'Diana Ross',
            age: 22,
        },
        {
            id: 5,
            name: 'Ethan Hunt',
            age: 35,
        },
    ];

    const personDetails = persons.map((person) => (
        <Person key = {person.id} person={person} />
    ));

    return <div>{personDetails}</div>;
}

export default NameList;
