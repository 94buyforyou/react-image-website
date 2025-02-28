import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

export const Homepage = () => {
    let [input, setInput] = useState("");
    let [data, setData] = useState(null);
    let [page, setPage] = useState(1);
    let [currentSearch, setCurrentSearch] = useState("");
    const auth = process.env.REACT_APP_API_KEY;
    const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
    let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

    const search = async (url) => {
        let result = await axios.get(url, { headers: { Authorization: auth } });
        setData(result.data.photos); // 把取得的資料填入原本是null的data
        setCurrentSearch(input);
        setPage(1); // 重置 page 為 1
    };

    const morePicture = async () => {
        let newPage = page + 1; // 增加 page 號
        let newURL;

        // 根據 currentSearch 判斷是搜尋還是精選圖片
        if (currentSearch === "") {
            newURL = `https://api.pexels.com/v1/curated?page=${newPage}&per_page=15`;
        } else {
            newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${newPage}`;
        }

        let result = await axios.get(newURL, { headers: { Authorization: auth } });
        setData((prevData) => prevData.concat(result.data.photos)); // 合併圖片
        setPage(newPage); // 更新 page
    };

    // 當進入這個頁面時,執行函式search,自動顯示圖片
    useEffect(() => {
        search(initialURL);
    }, []);

    return (
        <div style={{ minHeight: "100vh" }}>
            <Search
                search={() => {
                    if (input == "") {
                        search(initialURL);
                    } else {
                        search(searchURL);
                    }
                }}
                setInput={setInput}
            />
            <div className="pictures">
                {data &&
                    data.map((d) => {
                        return <Picture data={d} />;
                    })}
            </div>
            <div className="morePicture">
                <button onClick={morePicture}>更多圖片</button>
            </div>
        </div>
    );
};

export default Homepage;
