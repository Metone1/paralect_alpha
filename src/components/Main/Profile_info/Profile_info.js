import styles from './Profile_info.module.css';
import group from '../../../images/group_24px.svg';
import person from '../../../images/person_24px.svg';

const Profile_info = ({ user }) => {
    return (
        <div className={styles.profile_info}>
            <img className={styles.photo} src={user.avatar_url} alt="photo" />
            <p className={styles.user_name}>{user.name}</p>
            <a className={styles.a} href={user.html_url} target="_blank">{user.login}</a>
            <div className={styles.follow}>
                <img className={styles.group} src={group} alt="group" />
                <p className={styles.followers}>{user.followers} followers</p>
                <img className={styles.person} src={person} alt="person" />
                <p className={styles.following}>{user.following} following</p>
            </div>
        </div>
    );
}

export default Profile_info;