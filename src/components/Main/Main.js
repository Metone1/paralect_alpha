import styles from './Main.module.css';
import Profile_info from './Profile_info/Profile_info';
import Repository_empty from './Repository_empty/Repository_empty';
import Repositories from './Repositories/Repositories';

const Main = ({ user, repositories }) => {

    return (
        <div className={styles.main}>
            <Profile_info user={user} />
            {
                repositories.length
                    ? <Repositories repositories={repositories} />
                    : <Repository_empty />
            }
        </div>
    );
}

export default Main;