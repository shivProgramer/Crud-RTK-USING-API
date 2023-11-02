import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";

const Read = () => {
    const {users,loading} = useSelector((state)=>state.app);
    console.log("allData",users);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(showUser());
    },[])

    if(loading){
        return (<h2>Loading...</h2>)
    }
  return (
    <div>
      <h2>All data</h2>
      <input className="form-check-input" name="gender" type="radio" />
      <label className="form-check-label">All</label>
      <input className="form-check-input" name="gender" value="Male" type="radio" />
      <label className="form-check-label">Male</label>
      <input
        className="form-check-input"
        name="gender"
        value="Female"
        type="radio"
      />
      <label className="form-check-label">Female</label>

      <div>
       { users && users.map((data , id )=>(
        <div className="card w-50 mx-auto my-2" key={id}>
          <div className="card-body">
            <h5 className="card-title">Name : {data.name} </h5>
            <h6 className="card-subtitle mb-2 text-muted">   {data.email} </h6>
            <p className="card-text"> age : {data.age} </p>
            <p className="card-text"> Gender : {data.gender} </p>
            <button className="card-link">View</button>
            <button className="card-link">Edit</button>
            <button className="card-link">delete</button>
          </div>
        </div>
       )) }
      </div>
    </div>
  );
};

export default Read;
