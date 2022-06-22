import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [  user, setUser] = useState({  name:""});

    const handleChange = e =>{
      const { name,value} = e.target
      // console.log(  name,value);
      setUser({
          // ...user,
          [ name ]: value
      })
    }
    
    const data = async () =>{
        // console.log(name);
        const {name} = user
       
            axios.post("http://localhost:9002/signup",user)
            
            // .than( res => console.log("data posted"))
        }
        
         
  return (

    <>
        <div className="register" >
            <h1 >Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input><br/><hr/>
            
            <button className="botton" onClick={data}>save to mongodb</button>
        </div>
    </>
  )
}

export default SignUp