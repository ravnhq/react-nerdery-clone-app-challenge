import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #1ed760;
    width: 324px;
    border-radius: 500px;
    font-weight: 700;
    height: 48px;
    text-align: center;
    transition: transform ease-in-out 200ms;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

    &:hover {
        transform: scale(1.1);
    }
`;
