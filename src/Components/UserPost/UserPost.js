import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const UserPost = (props) => {
    const { title, body, id } = props.post;

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container width="lg">
                    <Typography component="div" style={{ backgroundColor: '#dbe3e5', width: '195vh', textAlign: 'center', padding: '20px' }}>
                        <strong>ID: {id}</strong>
                        <h1>{title}</h1>
                        <p>{body}</p>
                        <h6><Link style={{ textDecoration: "none" }} to={`/user/${id}`}><Button variant="outlined" color="primary">
                            See More
                        </Button></Link></h6>

                    </Typography>
                    <br />
                </Container>
            </React.Fragment>
        </div>
    );
};

export default UserPost;