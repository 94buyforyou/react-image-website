import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

export const Homepage = () => {
    let [data, setData] = useState(null);
    const auth = process.env.REACT_APP_API_KEY;
    const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

    const search = async () => {
        let result = await axios.get(initialURL, { headers: { Authorization: auth } });
        console.log(result);
        setData(result.data.photos);
    };
    return (
        <div style={{ minHeight: "100vh" }}>
            <Search search={search} />
            <div className="pictures">
                {data &&
                    data.map((d) => {
                        return <Picture data={d} />;
                    })}
            </div>
        </div>
    );
};

export default Homepage;
