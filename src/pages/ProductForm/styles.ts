import styled from "styled-components";
import { device } from "styles/device";

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    user-select: none;

    form {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    input {
        margin: 8px 0px;
    }

    label {
        margin-top: 8px;
    }

    .form-row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .form-row-cell {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .form-row-divider {
        margin: 0px 8px;
    }

    .form-error {
        color: ${(props) => props.theme.colors.error};
    }

    @media (max-width: ${device.mobileMax}) {
        .form-row {
            display: flex;
            flex-direction: column;
        }

        .form-row-divider {
            margin: 0;
        }

        .form-actions {
            flex-direction: column-reverse;
        }

        button {
            margin: 8px 0px;
        }
    }
`;
