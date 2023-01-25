import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    return(
        <div className="profile">
            <div className={s.ava}>
                <img src={props.href} alt=""/>
            </div>
            <div className="description">{props.description}</div>
        </div>
    )
}

export default ProfileInfo;