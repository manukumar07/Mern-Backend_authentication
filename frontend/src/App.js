import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login";
import Notfound from "./component/Auth/Notfound";
import Home from "./component/Pages/Home";
import Signup from "./component/Auth/Signup";
import { Logout } from "./component/Auth/Logout";
import ForgotPassword from "./component/Auth/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
