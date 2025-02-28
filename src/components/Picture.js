import React from "react";

const Picture = ({ data }) => {
    return (
        <div className="picture">
            <p>{data.photographer}</p>
            <div className="imageContainer">
                <img src={data.src.large} alt={data.alt} />
            </div>
            <p>
                下載:
                <a target="blank" href={data.src.large}>
                    按此
                </a>
            </p>
        </div>
    );
};

export default Picture;
