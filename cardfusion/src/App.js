import "./App.css";
import Nav from "./components/Nav";
import Des from "./components/Des";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";


function App() {


  return (
    <>
      <Nav/>
      <Outlet></Outlet>
      <Contact />
    </>
  );
}

export default App;
