import Navbar from "./component/Navbar";
import Main from "./Main";
import  {Fragment} from 'react';
import React from "react";
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


function Routing() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" exact element={
                <Main/>
              }/>
              <Route path="/about" element={
                    <h1>acerca de???  </h1>
              }/>
              <Route path="*" element={<h1>Error 404, el URL no existe </h1>}/>
          </Routes>
      </BrowserRouter>




  );
}

export default Routing;
