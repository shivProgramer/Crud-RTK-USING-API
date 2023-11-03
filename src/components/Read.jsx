import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModel from "./model/CustomModel";
import { Link } from "react-router-dom";

const Read = () => {
  const { users, loading } = useSelector((state) => state.app);
  const [showPopup, setShowPopup] = useState(false);
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
      <input className="form-check-input" name="gender" type="radio" />
      <label className="form-check-label">All</label>
      <input
        className="form-check-input"
        name="gender"
        value="Male"
        type="radio"
      />
      <label className="form-check-label">Male</label>
      <input
        className="form-check-input"
        name="gender"
        value="Female"
        type="radio"
      />
      <label className="form-check-label">Female</label>

      <div>
        {users &&
          users
            .slice() // Create a shallow copy of the array
            .sort((a, b) => {
              // Assuming 'id' is the property you want to sort by in descending order
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
                  <Link to={`/edit/${data.id}`} className="card-link">Edit</Link>
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
