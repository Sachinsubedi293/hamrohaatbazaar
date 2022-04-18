import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="text-center text-lg-start text-dark bg-secondary" >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className>
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Hamro Haat Bazzar
                </h6>
                <p>
                  Every type of product you need.
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-dark">MDBootstrap</a>
                </p>
                <p>
                  <a className="text-dark">MDWordPress</a>
                </p>
                <p>
                  <a className="text-dark">BrandFlow</a>
                </p>
                <p>
                  <a className="text-dark">Bootstrap Angular</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-dark">Your Account</a>
                </p>
                <p>
                  <a className="text-dark">Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-dark">Shipping Rates</a>
                </p>
                <p>
                  <a className="text-dark">Help</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3" /> Kathmandu, KTM 44600, NPL</p>
                <p><i className="fas fa-envelope mr-3"/> HHB@gmail.com</p>
                <p><i className="fas fa-phone mr-3" /> + 977 984 073 811 5</p>
              </div>
              {/* Grid column */}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
          <hr className="my-3" />
          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  © 2022 Copyright:
                  <div>
                  <a className="text-dark" href="#">HHB.com</a>
                  </div>
                </div>
                {/* Copyright */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a className="btn btn-outline-dark btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
                {/* Twitter */}
                <a className="btn btn-outline-dark btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
                {/* Google */}
                <a className="btn btn-outline-dark btn-floating m-1" role="button"><i className="fab fa-google" /></a>
                {/* Instagram */}
                <a className="btn btn-outline-dark btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>

    </>
  )
}

export default Footer;