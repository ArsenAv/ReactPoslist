import React from 'react';
import Post from './Post';
import './PostStyles.css'

export default function Pool(props){
    return(
        <div >
            { 
                props.postsArr.map(post => {
                    return <Post  post = {post} key = {post.id}/>
                })
            }
        </div>
    )
}