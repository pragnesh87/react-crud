import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveUser } from "../Utils/ApiService";

function Create() {
  const history = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(form, () => {
      history("/");
    });
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="helpId"
            placeholder="Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="user-email"
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <Link to="/" className="btn btn-secondary ms-1">
          Back
        </Link>
      </form>
    </>
  );
}

export default Create;
