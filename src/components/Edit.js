import React, { useEffect, useState } from "react";
import { Form, Link, useLoaderData, useParams } from "react-router-dom";
import { getUser } from "../Utils/ApiService";

function Edit(props) {
  const loadData = useLoaderData();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setForm({
      name: loadData.data.name,
      email: loadData.data.email,
      password: "",
    });
  }, []);

  return (
    <>
      <Form method="post" action={`/update/${id}`}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            defaultValue={form.name}
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
            name="email"
            defaultValue={form.email}
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
            name="password"
            defaultValue=""
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <Link to="/" className="btn btn-secondary ms-1">
          Back
        </Link>
      </Form>
    </>
  );
}

export default Edit;
