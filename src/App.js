import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Price from "./Components/Price";
import AboutUs from "./Components/AboutUs";
import HelpUs from "./Components/HelpUs";

function App() {
  return (
    <>
      <NavBar />
      <Search />
      <Price />
      <AboutUs />
      <HelpUs />
    </>
  );
}

export default App;
