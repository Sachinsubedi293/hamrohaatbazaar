import React, { useState } from 'react'
import car1 from '../Static/img/car1.jpg';
import car2 from '../Static/img/car2.jpg';
import car3 from '../Static/img/car3.jpg';
const Navbar = () => {
    const [pos, setpos] = useState("show");
    const Drop=()=>{
        if (pos==="") {
            setpos("show")
        }else{
            setpos("");
        }
        
    }
  return (
    <>
     <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block rounded">
            <a onClick={Drop} className="btn shadow-none d-flex align-items-center justify-content-between btn-outline-primary  w-100 rounded-top" data-toggle="collapse" style={{height: '65px', marginTop: '-1px', padding: '0 30px'}}>
              <h6 className="m-0" >Categories</h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav className={"collapse navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"+" "+pos} id="navbar-vertical">
              <div className="navbar-nav categorynav w-100 overflow-scroll p-2 text-start" style={{height: '410px'}}>
                <a className=" nav-item nav-link dropdown-toggle" data-bs-toggle="collapse" href="#category" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Men
                </a>
                <div className="collapse text-start " id="category">
                  <a href className="ps-5 text-muted">Men's Dresses</a>
                </div>
                <a href className="nav-item nav-link">Shirts</a>
                <a href className="nav-item nav-link">Jeans</a>
                <a href className="nav-item nav-link">Swimwear</a>
                <a href className="nav-item nav-link">Sleepwear</a>
                <a href className="nav-item nav-link">Sportswear</a>
                <a href className="nav-item nav-link">Jumpsuits</a>
                <a href className="nav-item nav-link">Blazers</a>
                <a href className="nav-item nav-link">Jackets</a>
                <a href className="nav-item nav-link">Shoes</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbar">
                <div className="navbar-nav mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">Home</a>
                  <a href="shop.html" className="nav-item nav-link">Shop</a>
                  <a href="contact.html" className="nav-item nav-link">Checkout</a>
                  <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="navbar-nav ml-auto py-0 d-flex align-items-center">
                  <a href className="btn btn-outline-danger p-1">Login</a>
                  <a href className="btn btn-outline-danger p-1 ms-2">Register</a>
                  <div className="dropdown">
                    <a className="dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-solid fa-user" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end text-center" aria-labelledby="triggerId">
                      <a className="dropdown-item" href="#">Settings</a>
                      <div className="dropdown-divider" />
                      <a href className="btn btn-outline-danger">Logout</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <img src={car1} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <img src={car2} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={car3} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;