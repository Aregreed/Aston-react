import { useState } from "react";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import Button from "../../shared/ui/Button/Button";
import Modal from "../../shared/ui/Modal/Modal";
import styles from "./Header.module.css";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className={`${styles.header} header`}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Мой React проект</h1>
                    <div className={styles.buttons}>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            variant="secondary"
                        >
                            О проекте
                        </Button>
                        <ThemeSwitcher />
                    </div>
                </div>
            </header>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>О проекте</h2>
                <p>Это учебный проект React.</p>
                <p>Используемые технологии:</p>
                <ul>
                    <li>React + TypeScript</li>
                    <li>Redux Toolkit + RTK Query</li>
                    <li>CSS Modules</li>
                    <li>JSONPlaceholder API</li>
                </ul>
            </Modal>
        </>
    );
};

export default Header;
