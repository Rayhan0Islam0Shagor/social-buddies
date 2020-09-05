import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CssBaseline, Container } from '@material-ui/core';
import UserComment from '../UserComments/UserComment';

const UserDetails = () => {
    const { userId } = useParams();
    const [comment, setComment] = useState([]);
    const [userPost, setUserPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUserPost(data))
    }, [])


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data));
    }, []);


    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container width="lg">
                    <Typography component="div" style={{ backgroundColor: '#dbe3e5', width: '195vh', textAlign: 'center', padding: '20px', marginTop: "100px" }}>
                        <img style={{ height: "150px", width: "250px" }} src={`https://loremflickr.com/600/400?random=${Math.random() * 100}`} alt="" />
                        <h3>{userPost.title}</h3>
                        <p>{userPost.body}</p>
                    </Typography>
                    <br />
                </Container>
            </React.Fragment>
            <React.Fragment>
                <CssBaseline />
                <Container width="lg">
                    {
                        comment.map(comment => <UserComment key={Math.random()} comment={comment}></UserComment>)
                    }
                </Container>
            </React.Fragment>
        </div>
    );
};

export default UserDetails;