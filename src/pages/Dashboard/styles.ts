import styled from "styled-components";
import SearchIcon from "assets/search_icon.svg";
import { device } from "styles/device";

export const Container = styled.div`
    width: 100%;
    justify-content: space-between;
`;

export const OptionsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-bottom: 16px;

    input[type="text"] {
        width: 200px;
        transition: width 0.3s ease-in-out;
        background-image: url(${SearchIcon});
        background-size: 24px;
        background-position: 8px 6px;
        padding-left: 36px;
        background-repeat: no-repeat;

        @media (max-width: ${device.mobileMax}) {
            width: 100%;
        }
    }

    input[type="text"]:focus {
        width: 100%;
    }

    button {
        span {
            margin-left: 4px;
        }
    }
`;

export const InputContainer = styled.div`
    flex: 1;
    margin-right: 8px;
`;
