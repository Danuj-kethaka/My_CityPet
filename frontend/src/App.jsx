import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Contact from "./pages/ContactUsPage.jsx";
import Services from "./pages/ServicePage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import SignUpPage from "./pages/Auth/SignUpPage.jsx";
import UserAccount from "./pages/UserAccount/UserAccount.jsx";
import AdminAccount from "./pages/AdminAccount/Admin.DashBoard.jsx";
import UserPage from "./pages/AdminAccount/AdminPages/User.Page.jsx"
import AdminSideBar from "./components/AdminSideBar.jsx";
import AdminDashBoard from "./pages/AdminAccount/Admin.DashBoard.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  const hideNavbarRoutes = ["/UserAccount", "/AdminAccount","/AdminAccount/users"];


  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/UserAccount" element={<UserAccount />} />
        <Route path="/AdminAccount" element={<AdminDashBoard />} />

         <Route path="/AdminAccount" element={<AdminSideBar />}>
          <Route index element={<AdminDashBoard />} />       
          <Route path="users" element={<UserPage />} />      
        </Route>
      </Routes>


    </>
  );
}

export default App;
