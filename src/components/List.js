import React from "react";
import { Link, useLoaderData, useSubmit } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Pagination from "./Pagination";

function List() {
  const loadedData = useLoaderData();
  const submit = useSubmit();

  const userData = loadedData.data;
  const pageMeta = loadedData.meta;

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            submit(null, {
              method: "delete",
              action: `/delete/${id}`,
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
                      <Link to={`/edit/${user.id}`} className="btn btn-primary">
                        <i className="bi bi-pencil-square"></i>
                      </Link>

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

      <Pagination last={pageMeta.last_page} current={pageMeta.current_page} />
    </>
  );
}

export default List;
