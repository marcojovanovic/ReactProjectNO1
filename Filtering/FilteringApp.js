import React, {useState} from 'react'
import FilterPerson from './FilterPerson'


function FilteringApp() {

  const persons = [

      {
        name:'Sara',
        phone:'555-333',
        adress:'Pera Perica 86'
      },
      {
        name:'Jarica',
        phone:'555-333',
        adress:'Zdere Perica 16'
      },
      {
        name:'Kosem',
        phone:'555-333',
        adress:'Jove Perica 26'
      }
  ]

    const [inputValue, setInputValue]=useState('')
    const [filterState, setFilterState]=useState([])

    const onChangeHandler = (e)=>{

        setInputValue(e.target.value)


        console.log(inputValue)

    }


    const filteredPerson = persons.filter(person=>{


        return person.name.toLowerCase().startsWith(inputValue.toLowerCase())

    })


  return (
    <div className='container'>

        <div>
          <input 
          type='text' 
          className='mb-5'
          value={inputValue}
          onChange={onChangeHandler}
          />
        </div>
      

      {filteredPerson.map((person,index)=>(

          <FilterPerson person={person} key={index} />

      ))}
     
    </div>
  )
}

export default FilteringApp
