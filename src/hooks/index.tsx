import React from "react";
import { ProductsProvider } from "./products";

interface AppProviderProps {
    children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return <ProductsProvider>{children}</ProductsProvider>;
}

export default AppProvider;
