import { SearchBar } from '../../components/SearchBar';
import { HomeLayout } from '../../Layout/HomeLayout';
import styled from 'styled-components';
import { useState, useTransition } from 'react';
import TracksSearch from '../../components/SearchResults/Tracks';
import ArtistsSearch from '../../components/SearchResults/Artists';
import AlbumsSearch from '../../components/SearchResults/Albums';
import PlaylistsSearch from '../../components/SearchResults/Playlists';

const StyledPageContainer = styled.section`
    padding: 0 16px;
`;

const Search = () => {
    const [isPending, startTransition] = useTransition();
    const [search, setSearch] = useState('');
    const [tab, setTab] = useState('album');

    function handleTabChange(tab: string) {
        startTransition(() => {
            setTab(tab);
        });
    }

    return (
        <HomeLayout loading={false}>
            <StyledPageContainer>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    tab={tab}
                    setTab={(s) => handleTabChange(s)}
                />

                {tab === 'track' && <TracksSearch q={search} />}
                {tab === 'artist' && <ArtistsSearch q={search} />}
                {tab === 'album' && <AlbumsSearch q={search} />}
                {tab === 'playlist' && <PlaylistsSearch q={search} />}
            </StyledPageContainer>
        </HomeLayout>
    );
};

export default Search;
