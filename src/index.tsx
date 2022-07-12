import ReactDOM from "react-dom";

import Main from "./components/Main";
import {MonstersProvider} from "./context/MonstersContext";
import "./index.css";

ReactDOM.render(
  <MonstersProvider>
    <Main />
  </MonstersProvider>,
document.getElementById("root"));
