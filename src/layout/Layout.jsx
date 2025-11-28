import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default Layout;