import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

export const Layout = () => {
    return (
        <div>
            <h1>React練習</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">首頁</Link>
                    </li>
                    <li>
                        <Link to="/about">關於這個網站</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
