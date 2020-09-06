import React from 'react';

const UserComment = (props) => {
    const { email, name, body } = props.comment

    const commentStyle = {
        backgroundColor: "#16213e", color: "white", padding: "30px", borderRadius: "10px", border: '1px solid red', marginBottom: "10px", textAlign: "center"
    }
    const imageStyle = {
        height: "50px", width: "50px", borderRadius: "50%"
    }

    return (
        <div style={commentStyle}>
            <h1><img style={imageStyle} src={`https://loremflickr.com/600/400?random=${Math.random() * 100}`} alt="" /> {name}</h1>
            <h3>{body}</h3>
            <h4>{email}</h4>
        </div>
    );
};

export default UserComment;