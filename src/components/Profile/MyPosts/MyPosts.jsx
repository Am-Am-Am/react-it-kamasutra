import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
       <div>
           <div className={s.posts}></div>
           <Post message = "мама"/>
           <Post message = "жаркая"/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
       </div>
    )
}

export default MyPosts;