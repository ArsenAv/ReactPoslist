import React from "react";
import ListPost from "./ListPost";

export default function ListPosts(props){
    return(
        <div>
        {props.postsArr.map(listpost => {
            return <ListPost listpost = {listpost} key = {listpost.id}/>
        })} 
        </div>
    )
}