import styled from "styled-components";
import { device } from "styles/device";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    min-height: 300px;

    div.feedback-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    span.feedback {
        font-size: 20px;
        color: grey;
        text-align: center;
        user-select: none;
    }

    @media (max-width: ${device.mobileMax}) {
        justify-content: center;
    }
`;
