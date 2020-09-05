import React from 'react';

const NotFound = () => {
    const notFoundStyle = {
        textAlign: "center",
        margin: "auto",
        color: "red",
        marginTop: "200px",
        fontSize: "40px"
    }
    return (
        <div style={notFoundStyle}>
            <h1>404 error!</h1>
            <h3>data not found</h3>
        </div>
    );
};

export default NotFound;