import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route , Outlet} from "react-router-dom";
import './App.css'
import Home from './components/Home';
// import Login from './components/Login';
// import Workshop from './components/workshop'
import Register from './components/Register'
import Signup from './components/Signup'
import Login from './components/Login';
import Root from './components/Root';
import Contact from './components/contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Workshop/> */}
      {/* < Register /> */}
      {/* < Signup /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Root />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Contact" element={< Contact />} />
        </Routes>
      </Router>
      @
    </>
  );
}

export default App
