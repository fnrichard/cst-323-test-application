import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import Register from "./register";
import Login from "./login";
import Users from "./users";
import User from "./user";

import './App.css';

function GetUser() {
  let { id } = useParams();
  return (
     <User id={id} />
  );
}

function App() {
  return (
    <div class="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Cloud Test Deployment</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">List Users</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="body">
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/user/:id" children={<GetUser />} />
            <Route path="/">
              <div>
                Welcome!
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
