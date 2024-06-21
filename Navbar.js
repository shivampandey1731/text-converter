import React from 'react'
import PropTypes from 'prop-types'

export default function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link" href="/">Textutils</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
        
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  )
}


// Navbar.propTypes={
//     title:PropTypes.string.isRequired
//     aboutText:PropTypes.string.isRequired
// }
// Navbar.defaultProps={
//     title:'set title here',
//     aboutText:'About text here'
// };