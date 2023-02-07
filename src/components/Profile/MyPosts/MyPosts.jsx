import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postElements = props.postsData.map(post => <Post message={post.message}/>);

    let newPostElement = React.createRef();
    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text)
    }
    
    return(
       <div>
           <div className={s.posts}>
                <h3>My posts</h3>
               <div>
                   <div><textarea name="" id="" cols="30" rows="10" ref={newPostElement}></textarea></div>
                   <div><button onClick={addPost}>button</button></div>
               </div>
               <div>
                   {postElements}
               </div>
           </div>

           <Post/>
           <Post/>
           <Post/>
           <Post/>
       </div>
    )
}

export default MyPosts;