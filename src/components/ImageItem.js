import React from 'react';


function ImageItem(props) {
    return (
        <img
        className="img-fluid"
        alt="illustration"
        src={props.src}
        />
    )
}

export default ImageItem;
