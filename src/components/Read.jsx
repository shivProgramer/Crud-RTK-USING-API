import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModel from "./model/CustomModel";
import { Link } from "react-router-dom";

const Read = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [radioData, setRadioData] = useState("");
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {/* model */}
      {showPopup && <CustomModel id={id} showPopup={setShowPopup} />}
      {/* end */}
      <h2>All data</h2>
      <input
        className="form-check-input"
        name="gender"
        type="radio"
        checked={radioData === ""}
        onChange={(e)=>setRadioData("")}
      />
      <label className="form-check-label">All</label>
      <input
        className="form-check-input"
        name="gender"
        value="Male"
        checked={radioData === "Male"}
        type="radio"
        onChange={(e)=>setRadioData(e.target.value)}
      />
      <label className="form-check-label">Male</label>
      <input
        className="form-check-input"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e)=>setRadioData(e.target.value)}

      />
      <label className="form-check-label">Female</label>

      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            }).filter((ele)=>{
              if(radioData === "Male"){
                return ele.gender === radioData;
              }else if(radioData === "Female"){
                return ele.gender === radioData;
              }else if(radioData === "") {
               return ele
              }else{
                return "No Data ";
              }
            })
            .slice()
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map((data, id) => (
              <div className="card w-50 mx-auto my-2" key={id}>
                <div className="card-body">
                  <h5 className="card-title">Name: {data.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {data.email}
                  </h6>
                  <p className="card-text">Gender: {data.gender}</p>
                  <button
                    className="card-link"
                    onClick={() => [setId(data.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${data.id}`} className="card-link">
                    Edit
                  </Link>
                  <button
                    className="card-link"
                    onClick={() => dispatch(deleteUser(data.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
