import styled from 'styled-components';

export const StyledInput = styled.input`
    color: white;
    font-family: sans-serif;
    background-color: #121212;
    width: 324px;
    border: none;
    outline: 1px solid #707070;
    display: block;
    border-radius: 2px;
    padding-inline-start: 8px;
    padding-inline-end: 8px;
    min-block-size: 48px;
    font-size: 1rem;

    &:hover {
        outline: 1px solid #c4c4c4;
    }

    &:focus {
        outline: 2px solid white;
    }

    &[data-errors='true'] {
        outline: 0.5px solid ${({ theme }) => theme.colors.error};

        &:focus {
            outline: 2.5px solid ${({ theme }) => theme.colors.error};
        }
    }
`;
