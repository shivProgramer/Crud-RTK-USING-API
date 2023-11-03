import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { updateUser } from "../features/userDetailSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
const Update = () => {
    const [updateData , setUpdateData] = useState(null);
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alluser = useSelector((state)=> state.app.users);
     
    useEffect(()=>{
      if(id){
        const userdata = alluser.filter((ele)=>ele.id === id);
        setUpdateData(userdata[0]);
      }
    },[])

    const newData = (e)=>{
        setUpdateData({...updateData , [e.target.name] : e.target.value})
    }

console.log("updateData",updateData);

    const handlesubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read")
    }  

  return (
    <div>
        <h2 className="my-2">Edit the Data </h2>
        <form className="w-50 mx-auto my-5" onSubmit={handlesubmit}> 
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            required
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            required
            checked = {updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked = {updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      
  </div>
  )
}

export default Update