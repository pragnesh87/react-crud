import api from "./Axios";

function CustomException(errorObj) {
  const { response } = errorObj;
  const { request, ...errorObject } = response;
  const error = new Error(errorObject.data.message || "some error");
  error.code = errorObject.status;
  error.errorText = errorObject.statusText || "something went wrong";
  return error;
}
CustomException.prototype = Object.create(Error.prototype);

export const getUsers = async (page) => {
  try {
    const resp = await api.get(`/user?page=${page}`);
    return resp.data;
  } catch (error) {
    throw new CustomException(error);
  }
};

export const getUser = async (id) => {
  try {
    const resp = await api.get(`/user/${id}`);
    return resp.data;
  } catch (error) {
    throw new CustomException(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const resp = await api.delete(`/user/${id}`);
    return resp.data;
  } catch (error) {
    throw new CustomException(error);
  }
};

export const saveUser = async (data) => {
  try {
    const resp = await api.post(`/user`, data);
    return resp.data;
  } catch (error) {
    throw new CustomException(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    const resp = await api.put(`/user/${id}`, data);
    return resp.data;
  } catch (error) {
    throw new CustomException(error);
  }
};
