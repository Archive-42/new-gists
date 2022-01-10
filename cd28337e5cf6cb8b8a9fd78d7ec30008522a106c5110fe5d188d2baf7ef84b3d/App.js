import { Link } from "react-router-dom";

<BrowserRouter>
      <div className="container" style={{ textAlign: "center" }}>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/user/john">
              User John
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/user/peter">
              User Peter
            </Link>
          </li>
        </ul>
 
        <Route
          path="/"
          render={() => {
            return <h2>Welcome Home</h2>;
          }}
          exact
        />
        <Route
          path="/about"
          render={() => {
            return <h2>Welcome About</h2>;
          }}
        />
        <Route path="/user/:username" exact strict component={User} />
      </div>
</BrowserRouter>