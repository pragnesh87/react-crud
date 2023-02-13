import api from "./Axios";

export const getUsers = (successCallback, errorCallback) => {
  api
    .get("/user")
    .then((resp) => {
      if (successCallback != null) {
        successCallback(resp);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err);
      }
    });
};

export const getUser = (id, successCallback, errorCallback) => {
  api
    .get(`/user/${id}`)
    .then((resp) => {
      if (successCallback != null) {
        successCallback(resp);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err);
      }
    });
};

export const deleteUser = (id, successCallback, errorCallback) => {
  api
    .delete(`/user/${id}`)
    .then((resp) => {
      if (successCallback != null) {
        successCallback(resp);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err);
      }
    });
};

export const saveUser = (data, successCallback, errorCallback) => {
  api
    .post(`/user`, data)
    .then((resp) => {
      if (successCallback != null) {
        successCallback(resp);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err);
      }
    });
};

export const updateUser = (id, data, successCallback, errorCallback) => {
  api
    .put(`/user/${id}`, data)
    .then((resp) => {
      if (successCallback != null) {
        successCallback(resp);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err);
      }
    });
};
