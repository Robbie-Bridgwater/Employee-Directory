import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
<div className="card col-sm-3">
  <img className="card-img-top" src={props.picture} alt={props.name}></img>
  <div className="card-body">
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><strong>Name:</strong> {props.name}</li>
      <li className="list-group-item"><strong>Email:</strong> {props.email}</li>
      <li className="list-group-item"><strong>Phone:</strong> {props.phone}</li>
      <li className="list-group-item"><strong>City:</strong> {props.location}</li>
    </ul>
  </div>
  </div>
  );
}


export default EmployeeCard;