import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [{message: 'где нас нет?', id: '0',likesCount: 0}, {message: 'я мечтаю!', id: '1',likesCount: 0}]
    let postElements = postsData.map(post => <Post message={post.message}/>);
    return(
       <div>
           <div className={s.posts}>
               {/*<Post message ={postsData[0].message}/>*/}
               {/*<Post message ={postsData[1].message}/>*/}
               {postElements}
           </div>

           <Post/>
           <Post/>
           <Post/>
           <Post/>
       </div>
    )
}

export default MyPosts;