import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            success: string;
            error: string;
            alert: string;
            primary: string;
            secondary: string;
            accent: string;
            filledText: string;
            text: string;

            page: {
                background: string;
            };
        };

        fonts: {
            mobile: string;
            small: string;
            medium: string;
            large: string;
            subTitle: string;
            title: string;
        };

        containers: {
            shadow: string;
        };
    }
}
