import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {LoginPage} from './Routes.js'
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
    </Routes>
    </Router>
  );
}

export default App;