import React from "react";

const Picture = ({ data }) => {
    return (
        <div className="picture">
            <p>{data.photographer}</p>
            <div className="imageContainer">
                <img src={data.src.large} alt={data.alt} />
            </div>
            <p>
                在此下載圖片:
                <a target="blank" href={data.src.large}>
                    按一下
                </a>
            </p>
        </div>
    );
};

export default Picture;
