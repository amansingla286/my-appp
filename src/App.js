import "./App.css";
import About from "./components/About"; 
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState("Null");

  const showAlert = (meassage, type) => {
    setAlert({
      msg: meassage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const removeBodyClases=()=>{
document.body.classList.remove("bg-primary")
document.body.classList.remove("bg-success")
document.body.classList.remove("bg-danger")
document.body.classList.remove("bg-warning")
document.body.classList.remove("bg-light")
document.body.classList.remove("bg-dark")

  }

  const toggleMode = (cls) => {
    removeBodyClases();
    document.body.classList.add("bg-"+cls)
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(36 74 100)";
      showAlert("dark mode in enabled", "success");
      // document.title = "TextUtils-dark mode";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode in enabled", "success");
      // document.title = "TextUtils-light mode";

    }
  };
  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
      showAlert("green mode in enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode in enabled", "success");
    }
  };
  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "blue";
      showAlert("green mode in enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode in enabled", "success");
    }
  };

  return (
    <>
    <Router>
        <Navbar
          title="TextUtils"
          aboutText="about us"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        
        <Switch>
          <Route path="/about">
            <About  mode={mode}/>
          </Route>
         
          <Route path="/">
          <TextForm
                showalert={showAlert}
                heading=" TryTextutils-word counter | character counter ,Remove Extra Spaces"
                mode={mode}
              />
          </Route>
        </Switch>
        </div>
        </Router>
    </>
  );
}

export default App;
