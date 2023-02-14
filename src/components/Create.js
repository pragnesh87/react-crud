import React from "react";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { saveUser } from "../Utils/ApiService";

function Create() {
  const navigation = useNavigation();
  return (
    <>
      <Form method="post" action="/create">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="helpId"
            placeholder="Name"
            name="name"
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
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={navigation.state === "submitting"}
        >
          Submit
        </button>
        <Link to="/" className="btn btn-secondary ms-1">
          Back
        </Link>
      </Form>
    </>
  );
}

export default Create;
