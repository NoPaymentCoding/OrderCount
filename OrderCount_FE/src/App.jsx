import React from "react";
import LoginScreen from "./components/UserScreen/LoginScreen";
import MainScreen from "../src/components/MainScreen";
import SignUpScreen from "./components/UserScreen/SignUpScreen";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen/>}/>
        <Route path="/signup" element={<SignUpScreen/>}/>
        <Route path="/main" element={<MainScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App;
