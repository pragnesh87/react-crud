import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { deleteUser, getUsers } from "../Utils/ApiService";

function List() {
  const [userData, setUserData] = useState([]);
  const [pages, setPages] = useState([]);

  const listUsers = (resp) => {
    setUserData(resp.data.data);
    setPages(resp.data.meta.links);
  };

  useEffect(() => {
    console.log("in use effect");
    getUsers(listUsers);
  }, []);

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            deleteUser(id, () => {
              getUsers(listUsers);
            }),
        },
        {
          label: "No",
          onClick: null,
        },
      ],
    });
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <form action="">
          <div className="mb-6">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search"
            />
          </div>
        </form>
        <Link to="/create" className="btn btn-secondary">
          Create
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-primary">
                        <Link to={`/edit/${user.id}`}>
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <div className="btn-group" role="group" aria-label="Basic example">
        {pages.map((page) => (
          <button type="button" className={`btn btn-primary ${page.active}`}>
            {page.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default List;
