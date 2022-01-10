const User = ({ match }) => {
    return <h2>Welcome User {match.params.username} </h2>;
  };

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
        <Route path="/user/:username" exact strict component={User} />
      </div>
</BrowserRouter>