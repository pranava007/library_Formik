import React from 'react'
import { Link } from 'react-router-dom'


const Navbarr = () => {


  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container px-4">
                <Link className=" navbar-brand" to='/'>Admin Dashbord</Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse" id="navbarResponsive" >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item "><Link className='m-1' to='/' >Book</Link></li>
                        <li className="nav-item "><Link className='m-1'  to='/author' >Author</Link></li>
                        <li className="nav-item  "><Link className='m-1'  to='/bookcreate'>AddBook</Link></li>
                        <li className="nav-item  "><Link className='m-1'  to='/autcreate'>AddAuthor</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <br />
        <br />
        <br />


    </>
  )
}

export default Navbarr