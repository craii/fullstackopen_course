import React from 'react'

const Numbers = (props) => {
    const filteredNumbers = props.filteredPersons.length === 0 ? props.person : props.filteredPersons
    return (filteredNumbers.map(person => <p key={person.id}>{person.name} {person.phone} <button key={person.id} onClick={() =>props.onDelete(person)}>delete</button></p>));
  };

export default Numbers;