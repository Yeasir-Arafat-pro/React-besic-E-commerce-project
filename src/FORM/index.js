import React, { useState } from 'react'
import style from './form.module.css'


export default function FORM() {
  const [user, setUser]  = useState({name:'', email: '', password: ''})
  const {name, email, password }= user;



      const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
        
      }



      const handleSubmit = (e) => {
        console.log('form submited')
        console.log(user);
        
        e.preventDefault();

        
      }
  
    return (
     <div>
        <h1>Ragistration</h1><br />

        <form action="" onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' value={name} required onChange={handleChange} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' value={email} required onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' value={password} required onChange={handleChange} />
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
     </div>
    )
}

