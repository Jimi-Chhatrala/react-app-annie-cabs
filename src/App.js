import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Price from "./Components/Price";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <NavBar />
      <Search />
      <Price />
      <AboutUs />
    </>
  );
}

export default App;
