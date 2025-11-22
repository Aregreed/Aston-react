import { ReactNode } from "react";
import { StoreProvider } from "./store/StoreProvider";

interface AppProvidersProps {
    children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
    return <StoreProvider>{children}</StoreProvider>;
};