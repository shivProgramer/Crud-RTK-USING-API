import React from 'react'
import '../model/customModel.css'
import { useSelector } from 'react-redux'
const CustomModel = ({ id , showPopup}) => {
    
    const allusers = useSelector((state)=> state.app.users);
    const singleUser = allusers.filter((ele)=> ele.id === id )
    console.log("singleUser ",singleUser)
  return (
    <div className="modalBackground">
    { singleUser &&  singleUser.map((item)=>(
        <div className="modalContainer">
        <button onClick={()=>showPopup(false)}>Close </button>
        <h2>  {item.name} </h2>
        <h3>  {item.email} </h3>
        <h4>  {item.age} </h4>
        <p>  {item.gender} </p>
      </div>
    ))}
  </div>
  )
}

export default CustomModel