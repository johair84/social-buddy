import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';



const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=> res.json())
        .then(data => setComment(data));
        
    }, [])

    return (
        
        <div>
            <h3>this is post Details {postId}</h3>
            <h2>{post.title}</h2>
            <p>{post.body}</p> 
            <p>Total comment {comment.length}</p>
            <p>Comment here</p>

            {
                comment.map(comments =><Comments comments={comments}></Comments>)
            }
        </div>
        
        
    );
};

export default PostDetail;