import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => {
    return(
       <div>
       <ProfileInfo href='https://htstatic.imgsmail.ru/pic_original/dbf57de482b4d0fc1a2bb920b198e398/2328376/' description='Описание '/>
           <MyPosts updateNewPostText={props.updateNewPostText} postsData = {props.profilePage.posts} addPost = {props.addPost} newPostText = {props.profilePage.newPostText} />
       </div>



    )
}

export default Profile;