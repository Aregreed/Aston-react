import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { ThemeProvider } from "../shared/lib/theme";
import { AppRouter } from "./providers/router";
import "./styles/global.css";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;