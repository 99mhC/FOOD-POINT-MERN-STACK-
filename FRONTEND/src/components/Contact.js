import React from 'react';
import './contact.css';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [suggestion, setSuggestion ] = useState('')

    const suggestionDetailHandler = () => {
        const suggestiondata = {name,email,phone,suggestion}
        console.log(suggestiondata);
        // alert("your data has been subbmitted")

        axios.post("http://localhost:9002/suggest",suggestiondata)
        .then(
            console.log("message posted")
        )
        
       
        

    }
  return (
    <>
    <div className="container">
  
     <div className="bhatureCard">
      <div className="bhaturaCard_img">
        <img src="https://tpc.googlesyndication.com/simgad/10371733874986534664?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlwF-pgFSP4xocJZjXsKb7e08NIDw" alt="" />
        <h1>Suggest Recipe</h1>
      </div>
      <form >
        NAME 
        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} required />
        EMAIL 
        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
        PHONE
        <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)}  required/>
        SUGGEST RECIPE
        <textarea className="form-control"  onChange={(e) => setSuggestion(e.target.value)}cols={30} rows={10} defaultValue={""} required /><br />
        <input type="checkbox" required /><br />
        <button className="btn btn-dark" onClick={suggestionDetailHandler}>Submit</button>
      </form>
     </div>
     <div className="otherProduct_img">
      <div className="pp1"></div>
      <div className="pp2">
        <img src="https://img.freepik.com/free-vector/cartoon-indian-restaurant-background_52683-69329.jpg?size=626&ext=jpg&ga=GA1.2.2131821096.1655792437" alt="" />
      </div>
      <div className="pp3"></div>
     </div>
    </div>

    </>
  )
}

export default Contact