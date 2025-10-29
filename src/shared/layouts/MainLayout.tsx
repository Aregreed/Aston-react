import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import PostList from "../../widgets/PostList/PostList";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.main}>
                <PostList />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
