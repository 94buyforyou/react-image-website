import React from "react";
import axios from "axios";
require("dotenv").config();

const Search = () => {
    const auth = process.env.REACT_APP_API_KEY;
    const initalURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

    const search = async () => {
        let result = await axios.get(initalURL, { headers: { Authorization: auth } });
        console.log(result);
    };

    return (
        <div className="search">
            <input className="input" type="text" />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;
