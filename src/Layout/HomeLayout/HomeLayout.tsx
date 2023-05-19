import { FullPageLoader } from '../../components/Loaders/FullPageLoader';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    loading: boolean;
}

const HomeLayout: React.FunctionComponent<Props> = ({ children, loading }) => {
    if (loading) return <FullPageLoader />;

    return <>{children}</>;
};

export default HomeLayout;
