import { createBrowserRouter } from "react-router-dom";
import Create from "../components/Create";
import DefaultError from "../components/DefaultError";
import Edit from "../components/Edit";
import List from "../components/List";
import { deleteUserAction, saveAction, updateAction } from "../Utils/Actions";
import { userLoader, editUserLoader } from "../Utils/Loaders";

export const router = createBrowserRouter([
  {
    path: "/:page?",
    element: <List />,
    loader: userLoader,
    errorElement: <DefaultError />,
  },
  {
    path: "/create",
    element: <Create />,
    action: saveAction,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
    loader: editUserLoader,
  },
  {
    path: "/update/:id",
    action: updateAction,
  },
  {
    path: "/delete/:id",
    action: deleteUserAction,
  },
]);
