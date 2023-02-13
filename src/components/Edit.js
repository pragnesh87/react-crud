import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../Utils/ApiService";

function Edit(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useNavigate();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getUser(id, (resp) => {
      setForm({
        name: resp.data.data.name,
        email: resp.data.data.email,
        password: "",
      });
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(id, form, (resp) => {
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
            value={form.name}
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
            value={form.email}
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
            value=""
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/" className="btn btn-secondary ms-1">
          Back
        </Link>
      </form>
    </>
  );
}

export default Edit;
