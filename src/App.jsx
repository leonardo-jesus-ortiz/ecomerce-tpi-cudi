import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import AuthStatus from "./components/AuthStatus";
import Dashboard from "./components/dashboard";
import CartButton from "./components/cartButton";
import NavbarBase from "./components/NavbarBase";

const App = () => {
  const userLogin = false; // Simulating user login status
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={!userLogin ? <SignUpPage/> : <Navigate to="/"/>} />
          <Route path="/login" element={!userLogin ? <LoginPage/> : <Navigate to = "/"></Navigate>} />
        </Routes>
      </Router>
  );
}

export default App; 