import React from 'react';
import Pool from './Posts/Pool';
import List from './CaseOfpost/List'



function App() {
    const postsArr = [
        {id: 1, used: false, title: "Text1", comments:[{id:1, text:"comment1"}]}, 
        {id: 2, used: false, title: "Text2", comments:[{id:1, text:"comment3"}, {id:2, text:"comment4"}]}, 
        {id: 3, used: false, title: "Text3", comments:[]}
    ];
    
    return (
        <div>
            <Pool postsArr = {postsArr} />  
            <div className = "listpost">
                <List postsArr = {postsArr} listPosts = {[]}/>
                <List postsArr = {postsArr} listPosts = {[]}/>
            </div>
        </div>
    );
}

export default App;
