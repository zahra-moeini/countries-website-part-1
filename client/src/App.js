import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Nav'
import Api from './Api'
import 'bootstrap/dist/css/bootstrap.min.css';
import Compoent from './Compoent';
import Notfound from './Notfound';
function App() {
  return (
    <div>
      <Nav/>
      <Api/>
      {/* <Router>
        <Routes>
          <Route path='/Compoent' element={<Compoent/>}></Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router> */}
    </div>
  );
}
export default App;
