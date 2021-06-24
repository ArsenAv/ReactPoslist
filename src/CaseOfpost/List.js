import React from 'react';
import AddButon from './AddButon';
import ListPosts from './LIstPosts';

export default function List(props){
    const addPost  =  function(){
       const lastpost = props.postsArr.shift()
       if(lastpost.used === false){
           lastpost.used = true;
           props.ListPosts.push(lastpost);
       }


    }
    return(
     <div className = "parentcase">
         <ListPosts/>
         <AddButon onclick = {addPost}/>
     </div>
      
    )

    }

    // add function
    // stugel verjin false element in postsArr, orinak, for(let i = postsArr.length -1;....){if false add to listArr, change to true, break}