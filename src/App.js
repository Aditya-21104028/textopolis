import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

/* React Router Dom is used to build single-page applications i.e. applications 
that have many pages or components but the page is never refreshed 
instead the content is dynamically fetched based on the URL. 
This process is called Routing and it is made possible with the help of React Router Dom. */

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Alert message with auto-close feature
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // Dark Mode feature
  const switchMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(13 38 71)';
      showAlert("Dark mode has been enabled!", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextoPolis" mode={mode} switchMode={switchMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<TextForm heading="Try TextoPolis - best text manipulation utility" mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;