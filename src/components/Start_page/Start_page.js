import styles from './Start_page.module.css';
import search from '../../images/search.svg';

const Start_page = () => {
    return (
        <div className={styles.start_page}>
            <div className={styles.div_block}>
                <img className={styles.search} src={search} alt="search_img" />
                <p className={styles.p}>Start with searching a GitHub user</p>
            </div>
        </div>
    );
}

export default Start_page;