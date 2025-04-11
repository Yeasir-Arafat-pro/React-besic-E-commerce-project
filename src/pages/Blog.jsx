import React from 'react'


import { useLocation, useNavigate, useParams } from 'react-router-dom'



const Blog = () => {
  const navigate =  useNavigate()
    const {title} = useParams()
    const location = useLocation()
    

    
  return (
    <div>
        <h1>{title}</h1>
        <p>{location.state.body}</p>
        <button onClick={()=> {navigate('/blogs')}}>Back to blog page</button>
    </div>
  )
}

export default Blog