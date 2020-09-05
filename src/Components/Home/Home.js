import React, { useState, useEffect } from 'react';
import UserPost from '../UserPost/UserPost';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    const helloWorldStyle = {
        margin: 'auto',
        textAlign: 'center',
        padding: '50px',
        margin: '20px',
        backgroundColor: '#1a1a2e',
        color: 'white',
        width: '206vh',
        borderRadius: '20px'
    };

    return (
        <div>
            <div style={helloWorldStyle}>
                <h1>Welcome to Buddies World</h1>
                <h1>Posts<sup style={{ color: '#d57149' }}>{post.length}</sup></h1>
            </div>
            {
                post.map(userPost => <UserPost key={Math.random()} post={userPost}></UserPost>)
            }
        </div>
    );
};

export default Home;