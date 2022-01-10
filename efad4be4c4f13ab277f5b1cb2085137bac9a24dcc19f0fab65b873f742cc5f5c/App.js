import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={ myApolloClient }>
    <div>
      <h2>Hook ApolloClient to React</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));

Once the ApolloProvider is hooked, the data can be request using gal component of 'Apollo Boast' and Query component of 'React'. 
<Query
    query={gql`
      {
        // your query
        }
      }
    `}
  >