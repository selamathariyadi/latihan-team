import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Discovery from "./component/Pages/Discovery";
import Destination from "./component/Pages/Destination";
import Aboutus from "./component/Pages/Aboutus";
function App() {
  return (
    <>
   <Routes>
    <Route path="/" Component = {Discovery}/>
    <Route path="/Discovery" Component = {Discovery}/>
    <Route path="/Destination" Component = {Destination}/>
    <Route path="/Aboutus" Component={Aboutus}/>

   </Routes>
    </>
  );
}

export default App;
