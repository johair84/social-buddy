import React from 'react';

const Comments = (props) => {
    const {name, email, body} = props.comments;
    return (
        <div>
            
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
            
        </div>
    );
};

export default Comments;