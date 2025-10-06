import React from "react";

function Success({ data }) {
  return (
    <div className="form success">
      <h2>Login Successful!</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Sex:</strong> {data.sex}</p>
      <p><strong>Date of Birth:</strong> {data.dob}</p>
    </div>
  );
}

export default Success;
