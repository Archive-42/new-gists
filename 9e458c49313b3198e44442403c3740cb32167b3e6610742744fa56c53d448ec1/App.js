import { BrowserRouter, Route } from "react-router-dom";

<BrowserRouter>
      <div className="container" style={{ textAlign: "center" }}>
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
      </div>
</BrowserRouter>