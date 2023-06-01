import { MobileNavbar } from '../../components/MobileNavbar';
import { FullPageLoader } from '../../components/Loaders/FullPageLoader';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { DesktopAsideBar } from '../../components/DesktopAsideBar';
import { DesktopHeader } from '../../components/DesktopHeader';

interface Props extends PropsWithChildren {
    loading: boolean;
}

const StyledDesktopLayout = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 4fr;
    grid-template-rows: 1fr auto;
    height: 100%;
    gap: 0px 10px;
    padding: 10px;
    box-sizing: border-box;
`;

const StyledDiv = styled.div`
    background: #121212;
    border-radius: 8px;
    overflow-x: hidden;

    & > * {
        box-sizing: border-box;
    }
`;

const HomeLayout: React.FunctionComponent<Props> = ({ children, loading }) => {
    if (loading && screen.width <= 480) return <FullPageLoader />;

    if (screen.width <= 480)
        return (
            <>
                <MobileNavbar />
                {children}
            </>
        );

    return (
        <StyledDesktopLayout>
            <DesktopAsideBar />
            <StyledDiv>
                <DesktopHeader />
                {children}
            </StyledDiv>
        </StyledDesktopLayout>
    );
};

export default HomeLayout;
