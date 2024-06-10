import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Price from "./Components/Price";
import AboutUs from "./Components/AboutUs";
import HelpUs from "./Components/HelpUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Forgot from "./Components/Forgot";
import AboutUsPage from "./Components/AboutUsPage";
import ContactUsPage from "./Components/ContactUsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
