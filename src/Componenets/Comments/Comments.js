import React from 'react';
import './Comments.css';

const Comments = (props) => {
    const {name, email, body} = props.comments;
    return (
        <div className="comment">
            
            
            <p>User's Email: {email}</p>
            <h4 className="UserName">{name} comment this</h4>
            <p>{body}</p>
            
        </div>
    );
};

export default Comments;