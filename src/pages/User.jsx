import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle'

const User = () => {

    const [name ,setName] = useState('')
    const [age ,setAge] = useState('')
    const[search, setSearch] = useSearchParams()

    const handleSubmit= (e)=>{
        e.preventDefault()
        setSearch({name:name, age:age})
    }

  return (
    <div>
      <PageTitle pageTitle="Users Page"/>
       User
        <form onSubmit={handleSubmit}>
        <input placeholder='Age' type="text" onChange={(e)=> setAge(e.target.value)}/>
            <input placeholder='Name' type="text" onChange={(e)=> setName(e.target.value)}/>
            <button type='submit'>Find User</button>
        </form>
        <h1>{search.get('age')}</h1>
        <h1>{search.get('name')}</h1>
    </div>
  )
}

export default User