<<<<<<< HEAD

import React from 'react'
const App = () => {
  return(
    <div>App</div>
  )
}
export default App
=======
import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {LoginPage, SignupPage} from './Routes.js'
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/sign-up' element={<SignupPage />}/>
    </Routes>
    </Router>
  );
}

export default App;
>>>>>>> 7e590d98a21212a4d594d26095cd0b45ace757ac
