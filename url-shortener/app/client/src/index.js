import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

import axios from "axios";

window.axios = axios;

ReactDom.render(<App />, document.querySelector("#root"));
