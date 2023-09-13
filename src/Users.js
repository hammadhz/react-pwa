import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response) => {
      response
        .json()
        .then((result) => {
          console.log(result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        })
        .catch(() => {
          let collection = localStorage.getItem("users");
          setData(JSON.parse(collection));
        });
    });
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
