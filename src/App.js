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
import VLogin from "./Components/VLogin";
import VRegister from "./Components/VRegister";
import EditProfile from "./Components/EditProfile";
import ChangePassword from "./Components/ChangePassword";
import RideInquiry from "./Components/RideInquiry";
import CabSearch from "./Components/CabSearch";
import RideDetails from "./Components/RideDetails";
import UserChat from "./Components/UserChat";
import VendorRideInquiry from "./Components/VendorRideInquiry";
import RideBook from "./Components/RideBook";
import AddRide from "./Components/AddRide";
import MyVehicle from "./Components/MyVehicle";
import Admin from "./Components/AdminComponents/AdminLayout";
import AdminLayout from "./Components/AdminComponents/AdminLayout";
import AdminVehicle from "./Components/AdminComponents/AdminVehicle";
import AdminDetails from "./Components/AdminComponents/AdminDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route index element={<Home />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="v_login" element={<VLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="v_register" element={<VRegister />} />
          <Route path="edit_profile" element={<EditProfile />} />
          <Route path="change_password" element={<ChangePassword />} />
          <Route path="ride_inquiry" element={<RideInquiry />} />
          <Route path="cab_search" element={<CabSearch />} />
          <Route path="ride_details" element={<RideDetails />} />
          <Route path="user_chat" element={<UserChat />} />
          <Route path="vendor_ride_inquiry" element={<VendorRideInquiry />} />
          <Route path="ride_book" element={<RideBook />} />
          <Route path="add_ride" element={<AddRide />} />
          <Route path="my_vehicle" element={<MyVehicle />} />
          <Route path="admin" element={<Admin />} /> */}
        <Route path="/admin_layout" element={<AdminLayout />}>
          <Route path="admin_vehicle" element={<AdminVehicle />} />
          <Route path="admin_details" element={<AdminDetails />} />
        </Route>
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
