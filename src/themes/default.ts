import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    title: "default",

    colors: {
        success: "#1AAA55",
        error: "#DB3B21",
        alert: "#FF5D00",
        primary: "#302A7A",
        secondary: "#4DA8C7",
        accent: "#23657A",
        filledText: "#fff",
        text: "#000",

        page: {
            background: " #f0f0f0",
        },
    },

    fonts: {
        mobile: "10px/16px Poppins",
        small: "12px/18px Poppins",
        medium: "14px/21px Poppins",
        large: "16px/25px Poppins",
        subTitle: "22px/27px Montserrat",
        title: "28px/34px Montserrat",
    },

    containers: {
        shadow: "0px 3px 6px #00000029",
    },
};

export default theme;
