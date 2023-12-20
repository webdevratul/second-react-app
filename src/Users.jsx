/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./Users.css";
import Friend from "./User";

export default function Users() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="box">
      <h3>Users: {Users.length}</h3>
      {Users.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

// 1. declare a state to hold data
// 2. use effects with callback and dependency array
// 3. set loaded data in useState
