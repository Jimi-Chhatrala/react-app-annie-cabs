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

function App() {
  return (
    <>
      <NavBar />
      {/* <Search /> */}
      {/* <Price /> */}
      {/* <AboutUs /> */}
      {/* <HelpUs /> */}
      {/* <ContactUs /> */}
      <Login />
      <Footer />
    </>
  );
}

export default App;
