import styled from 'styled-components';

export const StyledLink = styled.p`
    color: rgb(167, 167, 167);
    padding-top: 20px;

    & > a {
        color: white;
        transition: ease-in-out 200ms;

        ::before {
            content: ' ';
        }

        :hover {
            text-decoration: underline;
        }
    }
`;
