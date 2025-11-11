import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import UserTabs from '../../widgets/UserTabs/UserTabs';
import styles from "./MainLayout.module.css";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className={styles.app}>
            <Header />
            <UserTabs />
            <main className={`${styles.main} main`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;