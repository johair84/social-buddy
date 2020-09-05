import React from 'react';

const Post = (props) => {
    const {title} = props.post;
    return (
        <div>
            <h2>Title: {title}</h2>
            <button>See More</button>
        </div>
    );
};

export default Post;