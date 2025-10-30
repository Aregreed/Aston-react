import { useTheme } from "../../../shared/lib/theme";
import Button from "../../../shared/ui/Button/Button";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} className="theme-button">
            {theme === "light" ? "☀️" : "🌙"}
        </Button>
    );
};

export default ThemeSwitcher;