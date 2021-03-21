import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: ${(props) => props.theme.containers.shadow};
    color: ${(props) => props.theme.colors.filledText};
    border-radius: 16px;
    padding: 8px;
    margin: 8px;
    user-select: none;
    transition: width 0.2s ease-in-out;

    button {
        border-radius: 12px;
    }

    span {
        margin: 2px 0;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;
