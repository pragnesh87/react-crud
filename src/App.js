import { RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import { router } from "./Router/routes";

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">React CRUD</span>
          </div>
        </nav>
        <RouterProvider router={router} fallbackElement={<NotFound />} />
      </div>
    </div>
  );
}

export default App;
