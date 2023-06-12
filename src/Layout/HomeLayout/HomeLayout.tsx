import { PropsWithChildren } from 'react';
import { DesktopAsideBar } from '../../components/DesktopAsideBar';
import { DesktopHeader } from '../../components/DesktopHeader';
import {
    StyledDesktopLayout,
    StyledMainContentContainer,
} from '../Layout.styles';

const HomeLayout: React.FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    return (
        <StyledDesktopLayout>
            <DesktopAsideBar />
            <StyledMainContentContainer>
                <DesktopHeader />
                {children}
            </StyledMainContentContainer>
        </StyledDesktopLayout>
    );
};

export default HomeLayout;
