import { getUser, getUsers } from "./ApiService";

export function userLoader({ params }) {
  try {
    let pageno = params.page || 1;
    return getUsers(pageno);
  } catch (error) {
    console.log(error);
  }
}

export function editUserLoader({ params }) {
  return getUser(params.id);
}
