import React from 'react';

//In order to get Jsx to execute javascript rather than printing string wrap things in {}
const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

export default person;

