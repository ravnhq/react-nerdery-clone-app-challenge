import { MdError } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
    message: string;
}

const StyledError = styled.div`
    color: ${({ theme }) => theme.colors.error_content};
    gap: 10px;
    display: flex;
    width: 324px;
    align-items: center;

    & > p {
        font-size: 14px;
        font-weight: 400;
        overflow-wrap: break-word;
    }
`;

const ErrorMessage: React.FunctionComponent<Props> = ({ message }) => (
    <StyledError>
        <MdError />
        <p>{message}</p>
    </StyledError>
);

export default ErrorMessage;
