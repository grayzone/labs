import React from "react";
import User from "./User";

const UserList = Props => {
  const users = [
    {
      username: "test1",
      age: 34,
      gender: "male"
    },
    {
      username: "test2",
      age: 44,
      gender: "female"
    },
    {
      username: "test3",
      age: 14,
      gender: "male"
    }
  ];
  return <div>{users.map((user, i) => <User key={i} user={user} />)}</div>;
};

export default UserList;
