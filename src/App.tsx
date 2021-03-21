import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Routes from "routes";
import GlobalStyle from "styles/global";

import DefaultTheme from "themes/default";
import AppProvider from "hooks";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={DefaultTheme}>
                <AppProvider>
                    <Routes />
                    <GlobalStyle />
                </AppProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
