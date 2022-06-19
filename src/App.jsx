import React from "react";
import MyRoutes from "./components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./Services/history";

function App() {
  return <MyRoutes history={history}></MyRoutes>;
}

export default App;
