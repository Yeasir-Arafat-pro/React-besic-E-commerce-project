import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../components/PageTitle'

const Contact = () => {
 const navigate =  useNavigate()
  return (
    <div>
      <PageTitle pageTitle="Contact Page"/>
        <h1>Contact Pages</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur voluptatum nesciunt iste exercitationem provident nostrum neque ipsam tenetur porro officia vitae id, saepe quisquam perferendis corporis repellat delectus eaque odio suscipit deleniti. Architecto consequuntur libero minima sed, debitis reiciendis sunt modi ipsum eius perferendis vel, voluptate inventore deleniti quidem.</p>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sint dolores quod repellat soluta iure non. Facere harum deleniti eligendi quidem consequatur, quae voluptates tenetur minus laborum eum rem nisi.</p>

        <button onClick={()=> {navigate('/')}}>Go to home page</button>
    </div>
  )
}

export default Contact