import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Discovery from "./component/Pages/Discovery";
function App() {
  return (
    <>
   <Routes>
    <Route path="/" Component = {Discovery}/>
    <Route path="/Discovery" Component = {Discovery}/>
   </Routes>
    </>
  );
}

export default App;
