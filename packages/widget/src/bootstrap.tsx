import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
/**
 * Any dependencies will be added here, for example:
 * import 'faker' from Faker
 */

const mount = (el: Element) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-widget");

  // Assuming the container doesn't contain a 'dev-widget' element.
  if (devRoot) {
    // We are running in isolation, so we mount with our localised element
    mount(devRoot);
  }
}

export { mount };
