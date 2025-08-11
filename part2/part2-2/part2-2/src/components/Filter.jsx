import React from 'react'

const Filter = ({ setPersons, persons }) => {
     const filterName = (event) => {
    const filter = event.target.value.toLowerCase()
    const filteredPersons = persons.filter(person =>
      person.name.toLowerCase().includes(filter)
    )
    setPersons(filteredPersons)
  }
  return (
    <div>
       filter shown with <input onChange={filterName}  />
    </div>
  )
}

export default Filter
