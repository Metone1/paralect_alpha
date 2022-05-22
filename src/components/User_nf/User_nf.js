import styles from './User_nf.module.css';
import user from '../../images/user.svg';

const User_nf = () => {
    return (
        <div className={styles.user_nf}>
            <div className={styles.div_block}>
                <img className={styles.user_img} src={user} alt="user" />
                <p className={styles.user_p}>User not found</p>
            </div>
        </div>
    );
}

export default User_nf;