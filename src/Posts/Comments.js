import React from 'react';
import Comment from './Comment';
                                                    

export default function Comments(props){
    return(
           <ul>
                {
                    props.commentsArr.filter(
                        comment => {return comment.postId === props.postId}
                    ).map(comment => {
                        return <Comment  comment = {comment} key = {comment.id}/>
                    })
                }    
            </ul>
        
    );
};