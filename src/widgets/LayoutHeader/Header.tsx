import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
        <h1 className={styles.title}>Мой React проект</h1>
        <p className={styles.subtitle}>Мой React проект</p>
        </header>
    );
};

export default Header;
