import styled from 'styled-components';

export const StyledPlayButton = styled.button`
    position: absolute;
    right: 5px;
    outline: transparent;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgb(30, 215, 96);
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2px;
    opacity: 0;

    transition: all 350ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

export const StyledCardContainer = styled.div`
    box-sizing: border-box;
    display: block;
    width: 168px;
    max-height: 280px;
    transition: background-color ease-in-out 200ms;
    border-radius: 8px;
    padding: 8px;

    cursor: pointer;

    &:hover {
        background-color: #202020;
    }

    &:hover ${StyledPlayButton} {
        transform: translateY(-15px);
        opacity: 1;
    }
`;

export const StyledCardHeader = styled.div`
    position: relative;

    img {
        object-fit: cover;
        width: 152px;
        aspect-ratio: 1/1;
        border-radius: 4px;
    }
`;

export const StyledCardBody = styled.div`
    color: white;

    & p {
        margin: 0;
    }

    & span {
        white-space: normal;
        text-overflow: ellipsis;
        line-height: 1px;
        font-size: 14px;
        direction: ltr;
        color: rgb(167, 167, 167);
        max-height: 44px;
    }
`;
