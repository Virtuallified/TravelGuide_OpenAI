import React from "react";
/* Using "Routes" instead of "Switch" in react-router v6, 
   you also not need to use "exact" in Route declaration,
   you also need to use "element" instead of "component" */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Components [ Reusable ]*/

/* Components [ Containers ] */
import Main from "../components/containers/Main";
/* Components [ Layouts ] */

/* OPTIONAL */
// Lazy Loading to optimising components loading time

export default function RoutesConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}
