import { StyledErrorBanner } from '../Styles/ErrorBanner/ErrorBanner.styles';
import { MdErrorOutline } from 'react-icons/md';

interface Props {
    message: string;
}

const ErrorBanner: React.FunctionComponent<Props> = ({ message }) => (
    <StyledErrorBanner>
        <MdErrorOutline />
        <span>{message}</span>
    </StyledErrorBanner>
);

export default ErrorBanner;
