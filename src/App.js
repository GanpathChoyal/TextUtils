import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/textForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  const violettogglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#D400FF";
      document.body.style.color = "white";
      showAlert("Violet mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} violettogglemode={violettogglemode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
