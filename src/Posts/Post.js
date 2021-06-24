import React from "react";
import Comments from './Comments';

import './PostStyles.css'

export default function Post({post}){
    const commentsArr = [
        {id: 1, postId: 1, title: "Its,good"}, 
        {id: 2, postId: 1, title: "Its,crazy"}, 
        {id: 3, postId: 2, title: "Its,fake"}, 
        {id: 4, postId: 2, title: "Its,easy"}, 
        {id: 5, postId: 2, title: "Its,very"}
    ];
    return(
        <span className ="post">
            {post.title}
            <Comments commentsArr = {commentsArr} postId = {post.id}/>
        </span> 
    )
}