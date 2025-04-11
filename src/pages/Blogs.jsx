import React from 'react'
import {blogsData} from '../data'
import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'


const Blogs = () => {

  const sliceBodyData = (str, num) => {
    if (str.length > num) {
      const sliceData = str.slice(0, num)
    return sliceData
    }else{
      return str
    }
    
  }

  return (

        <div>
          <PageTitle pageTitle="Blogs Page"/>
        <h1>Blogs Pages</h1>
        <section className='blogsData'>
        {blogsData.map(blog=> {
          const {id, title, body} = blog
        return (
        <article key={id}>
            
          <h3>{title}</h3>
           <p>{sliceBodyData(body, 100)} ...</p>
           <Link to={title} state={{ id, title, body }}>Learn More</Link>
           </article>
           )
        })}
      
        </section>
    </div>

  )
}

export default Blogs