import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [message, setMessage ] = useState('')

    const ContactDetailHandler = () => {
        const contactdata = {name,email,phone,message}
        console.log(contactdata);
        // alert("your data has been subbmitted")

        axios.post("http://localhost:9002/signup",contactdata)
        .then(
            alert("message posted")
        )
        
       
        

    }
  return (
    <>
        <div className="contact_detail_and_logo_section">
  <div className="logo_section">
    <div className="logo_hadding">Let's talk about everything!</div>
    <div className="logo_cham3c"><img src="" alt="logo" /></div>
    <div className="logo_title">feel free to ask us anything</div>
    <div className="logo_discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus porro rerum accusamus sunt atque reiciendis fugit consequuntur illo. Reiciendis, explicabo maiores perspiciatis voluptate quaerat veritatis laborum rerum vel esse?</div>
  </div>
  <div className="contact_section">
    <form>
      <p>FULL NAME</p>
      <input className="form-control" onChange={(e) => setName(e.target.value)} type="text" />
      <p>EMAIL</p>e
      <input className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" />
      <p>PHONE</p>e
      <input className="form-control" onChange={(e) => setPhone(e.target.value)} type="number" />
      <p>MESSAGE</p>
      <textarea className="contact_input"  onChange={(e) => setMessage(e.target.value)}cols={30} rows={10} defaultValue={""} /><br />
      <button className="send_message" onClick={ContactDetailHandler} >SEND MESSAGE</button>
    </form> 
  </div>
</div>

    </>
  )
}

export default Product