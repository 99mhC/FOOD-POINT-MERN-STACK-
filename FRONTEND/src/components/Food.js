import React from 'react';
import {Link} from 'react-router-dom'

const Food = () => {
  return (
    <>
<div className="container">
  <div className="card-group">
    <div className="card">
      <img src="https://img.freepik.com/free-photo/chole-bhature-chick-pea-curry-fried-puri-served-terracotta-crockery-white-background-selective-focus_466689-24962.jpg?size=626&ext=jpg&ga=GA1.2.2131821096.1655792437" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">CHOLE BHATURE</h5>
        <p className="card-text">
        Bhature  is a popular indian Vegetarian Dish consisting of paneer (indian cheese) in a smooth, creamy and delicious spinach fravy.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <Link to="/bhature" className="btn btn-warning" >Know more..</Link>
      </div>
    </div>
    <div className="card">
      <img src="https://img.freepik.com/free-photo/delicious-pizza-isolated-white_53876-138507.jpg?size=626&ext=jpg&ga=GA1.2.2131821096.1655792437" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">PIZZA</h5>
        <p className="card-text">
        Pizza is a popular indian Vegetarian Dish consisting of paneer (indian cheese) in a smooth, creamy and delicious . 
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 30 mins ago</small>
        </p>
        <Link to="/pizza" className="btn btn-success" >Know more..</Link>
      </div>
    </div>
    <div className="card">
      <img src="https://img.freepik.com/free-photo/indian-healthy-cuisine-palak-paneer-served-with-tandoori-roti_55610-735.jpg?size=626&ext=jpg&ga=GA1.2.2131821096.1655792437" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">PALAK PANEER</h5>
        <p className="card-text">
        Palak Paneer  is a popular indian Vegetarian Dish consisting of paneer (indian cheese) in a smooth, creamy and delicious spinach.
        </p>
        <p id="know" />
        <p className="card-text">
          <small className="text-muted">Last updated 5 mins ago</small>
        </p>
        <Link to="/paneer" className="btn btn-dark" >Know more..</Link>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Food