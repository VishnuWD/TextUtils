// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  const [mode, setmode] = useState("dark")
  const [alert, setalert] = useState(null)
  const [color, setcolor] = useState({ back: "#282c34", clr: "#282c34" })



  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }


  const toggle = () => {
    if (mode === "light") {
      setmode("dark")
      setcolor({
        back: "#282c34",
        clr: "white"
      })

      showAlert("Dark mode has been enabled", "success")
    } else {
      setmode("light")

      setcolor({
        back: "white",
        clr: "#282c34"
      })

      showAlert("Light mode has been enabled", "success")
    }
  }
  if (color.back === "white") {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "#282c34"
  } else {
    document.body.style.backgroundColor = "#282c34"
    document.body.style.color = "white"
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utils" about="About" mode={mode} color={color} toggle={toggle} alert={showAlert} />
        <Alert alert={alert} />



        {/* <Switch> */}
          {/* <Route exact path="/"> */}
          <TextBox heading="Enter Text to use Convert Buttons" showAlert={showAlert} mode={mode} color={color} />
            {/* </Route> */}
          {/* <Route exact path="/about"> */}
          {/* <About mode={mode} /> */}
            {/* </Route>  */}
        {/* </Switch> */}

        {/* <About/>   */}
        {/* change title accordingly to the page like about and home */}
      {/* </Router> */}
    </>
  );
}

export default App;
