import no_rep from '../../../images/no_rep.svg';
import styles from './Repository_empty.module.css';

const Repository_empty = () => {
    return (
        <div className={styles.no_rep}>
            <img className={styles.img} src={no_rep} alt="no_rep" />
            <p className={styles.p}>Repositoru list is empty</p>
        </div>
    );
}

export default Repository_empty;