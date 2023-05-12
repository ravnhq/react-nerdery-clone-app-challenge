import styled from 'styled-components';

export const StyledForm = styled.form`
    background-color: black;
    font-family: 'Gotham';
    width: clamp(350px, 100%, 734px);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 14px;
    margin-right: auto;
    margin-left: auto;
    color: white;
    padding: 48px 100px;

    & > h1 {
        color: white;
        font-size: 3em;
        margin-top: 80px;
        margin-bottom: 40px;
    }
`;
