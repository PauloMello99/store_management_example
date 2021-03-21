import styled from "styled-components";
import { device } from "styles/device";

import LogoImage from "assets/store.png";

export const Container = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.containers.shadow};

    transition: height 0.2s ease-in-out;

    @media (max-width: ${device.mobileMax}) {
        height: 40px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: ${device.desktopMax};
    align-items: center;
    margin: 0px 16px;
    user-select: none;

    font: ${(props) => props.theme.fonts.subTitle};
    font-size: 28px;
    color: ${(props) => props.theme.colors.filledText};

    transition: font-size 0.2s ease-in-out;

    @media (max-width: ${device.mobileMax}) {
        font-size: 14px;
    }
`;

export const Logo = styled.img.attrs({ src: LogoImage })`
    width: 30px;
    height: 30px;

    margin-right: 8px;

    @media (max-width: ${device.mobileMax}) {
        width: 20px;
        height: 20px;
    }
`;
