import React from "react";
import Banner from "../assets/Banner.png";
function Header() {
  return (
    <div className='header'>
      <nav className='navbar navbar-expand-lg p-md-5'>
        <a className='h3 brand' href='#'>
          <strong> MAXEON</strong>
        </a>
        <button
          className='navbar-toggler bg-light'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active  m-md-3'>
              <a className='nav-link' href='#'>
                Products <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item m-md-3'>
              <a className='nav-link' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item  m-md-3'>
              <a className='nav-link' href='#'>
                Use Cases
              </a>
            </li>
            <li className='nav-item  m-md-3'>
              <a className='nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='btn btn-light login  m-md-3'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='row m-0 p-0'>
        <div className='col-5 h1 text-white tag-line-container'>
          Where
          <br /> words
          <br /> fail,
          <br /> Music
          <br /> Speaks
        </div>
      </div>
    </div>
  );
}

export default Header;
