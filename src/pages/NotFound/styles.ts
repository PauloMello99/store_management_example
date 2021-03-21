import styled from "styled-components";
import { device } from "styles/device";

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    user-select: none;

    span {
        font-size: 18px;
        height: 100%;
        margin-bottom: 8px;
    }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-height: 300px;
    max-width: 700px;
    padding: 8px;
    margin: 16px 0px;

    @media (max-width: ${device.tabletMin}) {
        flex-direction: column;
    }
`;

export const CardFeedback = styled.div`
    display: flex;
    height: 70%;
    flex-direction: column;
    padding: 16px;
`;
