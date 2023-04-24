import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Discovery from "./component/Pages/Discovery";
import Destination from "./component/Pages/Destination";
import Privatepages from "./component/Pages/Packagedetail/Privatepages";
function App() {
  return (
    <>
   <Routes>
    <Route path="/" Component = {Discovery}/>
    <Route path="/Discovery" Component = {Discovery}/>
    <Route path="/Destination" Component = {Destination}/>
    <Route path="/Privatetrip" Component={Privatepages}/>
   </Routes>
    </>
  );
}

export default App;
