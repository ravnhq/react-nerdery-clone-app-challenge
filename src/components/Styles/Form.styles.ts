import styled from 'styled-components';

export const StyledForm = styled.form`
    background-color: black;
    font-family: 'Gotham';
    width: clamp(350px, 100%, 734px);
    border-radius: 8px;
    margin-right: auto;
    margin-left: auto;
    color: white;
    padding: 48px 150px;
    margin-top: 25px;

    & > h1 {
        color: white;
        font-size: 3em;
        margin-top: 80px;
        margin-bottom: 40px;
        text-align: center;
    }

    & > div {
        margin: 0 auto;
        display: block;
        width: fit-content;

        & > * {
            margin-block-start: 1rem;
        }
    }
`;
