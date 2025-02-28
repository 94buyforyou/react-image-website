import React from "react";
import Search from "../components/Search";
import axios from "axios";

export const Homepage = () => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Search />
        </div>
    );
};

export default Homepage;
