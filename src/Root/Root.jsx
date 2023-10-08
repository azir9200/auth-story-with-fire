import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
  return (
    <div className="max- w-[1300px  mx-auto" >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;