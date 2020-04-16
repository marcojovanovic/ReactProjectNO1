import React from 'react'

function FilterPerson({person}) {

  const{name, phone, adress}=person

  return (
    <div>
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{adress}</p>
    </div>
  )
}

export default FilterPerson
