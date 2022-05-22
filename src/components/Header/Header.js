import styles from './Header.module.css';
import search from '../../images/search.svg';
import logo from '../../images/logo.svg';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="header_logo" />
            <img className={styles.search_img} src={search} alt="search_img" />
            <div onKeyPress={props.props.handleSubmit}>
                <input className={styles.search} type="search" placeholder='GitHub user' onChange={props.props.handleSearch} />
            </div>
        </header>
    );
}

export default Header;
