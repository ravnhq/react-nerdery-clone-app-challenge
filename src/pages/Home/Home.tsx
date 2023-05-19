import { MobileNavbar } from '../../components/MobileNavbar';
import { HomeLayout } from '../../Layout/HomeLayout';
import styled from 'styled-components';

const Home = () => (
    <HomeLayout loading={false}>
        <MobileNavbar />
    </HomeLayout>
);

export default Home;
