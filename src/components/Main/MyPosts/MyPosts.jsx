import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
       <div>
           <div className={s.posts}></div>
           <Post/>
           <Post/>
       </div>
    )
}

export default MyPosts;