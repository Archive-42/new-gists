import React from "react";
import { render } from "react-dom";
import { Provider } from "redux-zero/react";

import store from "./store";

import Counter from "./Counter";

const App = () => (
<Provider store={store}>
<Counter />
</Provider>
);

render(<App />, document.getElementById("root"));