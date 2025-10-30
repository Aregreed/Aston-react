import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "../shared/lib/theme";
import MainLayout from "../shared/layouts/MainLayout";
import "./styles/global.css";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <MainLayout />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
