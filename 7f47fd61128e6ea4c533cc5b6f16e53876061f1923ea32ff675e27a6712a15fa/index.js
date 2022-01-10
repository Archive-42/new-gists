import ReactDOM from "react-dom";
import { createRouter, announce } from "@curi/router";
import { browser } from "@hickory/browser";
import { createRouterComponent } from "@curi/react-dom";
import routes from "./routes";

let router = createRouter(browser, routes, {
  sideEffects: [
    announce(({ response }) => {
      return `Navigated to ${response.location.pathname}`;
    })
  ]
});
let Router = createRouterComponent(router);