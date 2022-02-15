import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./MyGym/Home";
import About from "./MyGym/About";
import Contact from "./MyGym/Contact";
import Login from "./MyGym/Login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      </Routes>
      </Router>
  );
}

export default App;
