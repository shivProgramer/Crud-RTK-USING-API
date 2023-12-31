import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../features/userDetailSlice'

const Navbar = () => {
  const allusers  = useSelector((state)=> state.app.users)
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
 useEffect(()=>{
  dispatch(searchUser(searchData));
 },[searchData]);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Rtk</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Create Post</Link>
          </li>
          <li className="nav-item">
            <Link to="/read" className="nav-link">All Post ({allusers.length}) </Link>
          </li>
        </ul>
        <form className="d-flex ">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"
        onChange={(e)=>setSearchData(e.target.value)}
        />
      </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar