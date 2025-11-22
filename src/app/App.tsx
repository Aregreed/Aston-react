import { AppProviders } from './providers';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../shared/lib/theme";
import { AppRouter } from "./providers/router";
import "./styles/global.css";

function App() {
    return (
        <AppProviders>
            <BrowserRouter>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
            </BrowserRouter>
        </AppProviders>
    );
}

export default App;