import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    
    <div className="container">
    <h1 style={{fontFamily:"sofia",backgroundColor:"bisque",padding:"20px"}}>Food Point</h1>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >HOME</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/bhature" className="nav-link active" aria-current="page" >Chhole Bhatore</Link>
        </li>
        <li className="nav-item">
          <Link to="paneer" className="nav-link" href="#">Palak Paneer</Link>
        </li>
        <li className="nav-item">
          <Link to="pizza" className="nav-link" href="#">Pizza</Link>
        </li>
        
        </ul>
      <div >
      <Link to="/contact" class="btn btn-success">Contact</Link>
      </div>
    </div>
  </div>
</nav>
</div>

    </>
  )
}

export default Nav