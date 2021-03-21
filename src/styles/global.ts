import { createGlobalStyle } from "styled-components";

import { device } from "./device";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        background-color: ${(props) => props.theme.colors.page.background};
        width: 100%;
        height: 100%;
    }

    body, input, button, textarea, select {
        font: 16px Poppins, Montserrat, sans-serif;
    }

    *::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border-radius: 10px;
    }

    *::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.accent};
    }

    input {
        height: 40px;
        border-radius: 4px;
        border: 2px solid ${(props) => props.theme.colors.primary};
        padding: 4px;
    }

    button {
        cursor: pointer;
        color: #000;
        background-color: #F5F5F5;
        border: none;
        min-height: 40px;
        border-radius: 4px;
        padding: 4px 12px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        user-select: none;
    }


    button.primary {
        color: ${(props) => props.theme.colors.filledText};
        background-color: ${(props) => props.theme.colors.primary};
    }

    button.secondary {
        color: ${(props) => props.theme.colors.filledText};
        background-color: ${(props) => props.theme.colors.secondary};
    }

    button.accent {
        color: ${(props) => props.theme.colors.filledText};
        background-color: ${(props) => props.theme.colors.accent};
    }

    button.outlined {
        color: ${(props) => props.theme.colors.text};
        background-color: white;
        border: 1px solid ${(props) => props.theme.colors.primary};
    }

    button.success {
        color: ${(props) => props.theme.colors.filledText};
        background-color: ${(props) => props.theme.colors.success};
    }

    button.failure {
        color: ${(props) => props.theme.colors.filledText};
        background-color: ${(props) => props.theme.colors.error};
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .col-auto { width: auto }
    .col-1 { width: 8.33% }
    .col-2 { width: 16.66% }
    .col-3 { width: 25% }
    .col-4 { width: 33.33% }
    .col-5 { width: 41.66% }
    .col-6 { width: 50% }
    .col-7 { width: 58.33% }
    .col-8 { width: 66.66% }
    .col-9 { width: 75% }
    .col-10 { width: 83.33% }
    .col-11 { width: 91.66% }
    .col-12 { width: 100% }

    @media (max-width: ${device.tabletMax}) {
        div[class*="col-"] { width: 100%; }
    }

`;
