import { useAsync } from '../../hooks/useAsync';
import { getPlaylists } from '../../services/spotify.service';
import { ResultCard } from '../../components/ResultCard';
import { MobileNavbar } from '../../components/MobileNavbar';
import { HomeLayout } from '../../Layout/HomeLayout';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    color: white;
    margin-left: 20px;
    margin-bottom: 0px;
`;
const StyledContainer = styled.div`
    z-index: auto;
`;

const Home = () => {
    const { data, loading } = useAsync(() => getPlaylists());

    return (
        <HomeLayout loading={loading}>
            <MobileNavbar />
            <StyledContainer>
                {data && (
                    <>
                        <StyledH2>{data.message}</StyledH2>
                        <StyledFlexContainer rowGap="20px" overflowX="scroll">
                            {data.playlists.map((playlist) => (
                                <ResultCard
                                    id={playlist.id}
                                    key={playlist.id}
                                    name={playlist.name}
                                    description={playlist.description}
                                    image={playlist.image}
                                />
                            ))}
                        </StyledFlexContainer>
                    </>
                )}
            </StyledContainer>
        </HomeLayout>
    );
};

export default Home;
