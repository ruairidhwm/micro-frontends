import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

/**
 * The above is a simple example of importing a remote application
 * Webpack looks in the remote section of the Module Federation Plugin for 'widget', and then
 * loads the remoteEntry file.
 *
 * If you change the remote app name, you need to update it both in webpack, and here.
 */

ReactDOM.render(<App />, document.querySelector("#root"));
