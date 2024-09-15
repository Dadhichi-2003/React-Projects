import "./App.css";

import Navbar from "./components/Navbar";
import HeadLines from "./components/HeadLines";
import Rounting from "./components/Routing";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeadLines />
      <Rounting />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
