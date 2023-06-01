import styled from 'styled-components';

export const StyledCardContainer = styled.div`
    box-sizing: border-box;
    display: block;
    width: 268px;
    height: 300px;
    transition: background-color ease-in-out 200ms;
    border-radius: 8px;
    padding: 14px;

    cursor: pointer;

    &:hover {
        background-color: #202020;
    }
`;

export const StyledCardHeader = styled.div`
    img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const StyledCardBody = styled.div`
    color: white;

    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    -webkit-line-clamp: 3;

    & p {
        margin: 0;
        font-size: 20px;
    }

    & span {
        line-height: 1px;
        font-size: 16px;
        direction: ltr;
        color: rgb(167, 167, 167);
    }
`;
