import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto">
      <div className="h-16">
      <Navbar></Navbar>
      </div>

    
      <Outlet></Outlet>
      
    </div>
  );
};

export default Root;
