import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    return (
        <div>
            <h2>Title: {title}</h2>
            <Link to= {`/post/${id}`}>
                <button>See More</button>
            </Link>
            
        </div>
    );
};

export default Post;