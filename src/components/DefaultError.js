import React from "react";
import { useRouteError } from "react-router-dom";

function DefaultError() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <span>{err.code}</span>
      <p>{err.message}</p>
      <p>{err.errorText}</p>
    </>
  );
}

export default DefaultError;
