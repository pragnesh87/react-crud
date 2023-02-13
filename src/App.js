import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List";
import NotFound from "./components/NotFound";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">React CRUD</span>
          </div>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<List />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/edit/:id" element={<Edit />}></Route>
            <Route exact path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
