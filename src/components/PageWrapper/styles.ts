import styled from "styled-components";
import { device } from "styles/device";

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 16px;

    @media (max-width: ${device.mobileMax}) {
        padding: 8px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    max-width: ${device.desktopMax};
`;
