import { redirect } from "react-router-dom";
import { deleteUser, saveUser, updateUser } from "./ApiService";

export async function updateAction({ params, request }) {
  let formData = await request.formData();
  const postData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    await updateUser(params.id, postData);
    return redirect("/");
  } catch (err) {
    console.log(err.code);
    if (err.code === 422) {
      return err;
    }
    return redirect(`/edit/${params.id}`);
  }
}

export async function saveAction({ params, request }) {
  let formData = await request.formData();
  const postData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    await saveUser(postData);
    return redirect("/");
  } catch (err) {
    if (err.code === 422) {
      return err;
    }
  }
}

export async function deleteUserAction({ params, request }) {
  try {
    await deleteUser(params.id);
    return redirect("/");
  } catch (err) {
    console.log(err);
  }
}
