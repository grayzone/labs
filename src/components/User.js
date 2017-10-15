import React from "react";

const User = props => {
  const { key, user } = props;  
  return (
    <div key={key}>
      <div>name : {user.username}</div>
      <div>age : {user.age}</div>
      <div>gender : {user.gender}</div>
      <hr />
    </div>
  );
};

export default User;
