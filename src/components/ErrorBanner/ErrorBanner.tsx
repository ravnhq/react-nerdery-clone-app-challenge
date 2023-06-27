import styled from 'styled-components';
import { MdErrorOutline } from 'react-icons/md';

interface Props {
    message?: string;
}

const StyledErrorBanner = styled.p`
    background-color: red;
    padding: 20px 10px;
    display: inline-flex;
    width: 100%;
    align-items: center;
    column-gap: 10px;
`;

const ErrorBanner: React.FunctionComponent<Props> = ({
    message = 'Something went wrong',
}) => (
    <StyledErrorBanner data-testid="error-banner">
        <MdErrorOutline />
        <span>{message}</span>
    </StyledErrorBanner>
);

export default ErrorBanner;
