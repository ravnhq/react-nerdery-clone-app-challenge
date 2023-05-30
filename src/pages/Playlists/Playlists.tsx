import { useDeferredValue, useState, useRef, useCallback } from 'react';
import { useAsync } from '../../hooks/useAsync';
import { useNavigate } from 'react-router-dom';
import { HomeLayout } from '../../Layout/HomeLayout';
import {
    getUserPlaylistById,
    searchTracks,
    getPlaylistTracks,
    addTrackToPlaylist,
    removeTrackFromPlaylist,
    deletePlaylistById,
    Track,
} from '../../services/spotify.service';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TrackCard } from '../../components/TrackCard';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { MdDelete } from 'react-icons/md';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const PlaylistDataContainer = styled.div`
    display: flex;
    color: white;
    column-gap: 32px;
    align-items: center;
    margin: 32px;
    cursor: pointer;

    img {
        width: 192px;
        height: 192px;
    }
`;

const StyledPlaylistName = styled.h1`
    font-size: 72px;
    font-stretch: 100%;
    font-weight: 900;
    margin: 0;
`;

const StyledSearchSection = styled.div`
    width: 100%;
    border-top: 1px solid gray;
    padding: 32px;
    color: white;
`;

const StyledSearchButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 900;
`;

const StyledSearchInput = styled.input`
    all: unset;
    background-color: #2c2c2c;
    padding: 8px 32px;
    font-size: 14px;
    border-radius: 4px;
    width: clamp(200px, 360px, 100%);
    font-weight: normal;
    margin-bottom: 32px;
`;

const StyledTrackList = styled.div`
    height: 900px;
    overflow-y: auto;
`;

const StyledPlaylistTrack = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
`;

const Playlist = () => {
    const { playlistId } = useParams();
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(true);
    const deferredQuery = useDeferredValue(query);
    const [offset, setOffset] = useState(0);
    const { loading, data } = useAsync(
        () => getUserPlaylistById(parseInt(playlistId || '')),
        {
            dependencies: [playlistId],
            runOnMount: true,
        },
    );
    const {
        loading: searchLoading,
        data: searchData,
        hasMore,
    } = useInfiniteScroll(deferredQuery, offset);
    const {
        loading: playlistTrackLoading,
        data: playlistsTrack,
        callback: fetchTracks,
    } = useAsync(() => getPlaylistTracks(parseInt(playlistId || '')), {
        dependencies: [playlistId],
        runOnMount: true,
    });

    const addTrack = (track: Track) => {
        addTrackToPlaylist(parseInt(playlistId || ''), track).then(fetchTracks);
    };

    const removeTrack = (track: Track) => {
        removeTrackFromPlaylist(track.id).then(fetchTracks);
    };

    const deletePlaylist = () => {
        deletePlaylistById(parseInt(playlistId || '')).then(() =>
            navigate('/'),
        );
    };

    const observer = useRef<IntersectionObserver>();

    const lastTrackElementRef = useCallback(
        (node: HTMLElement) => {
            if (searchLoading) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    console.log('visible');
                    setOffset((prevOffset) => prevOffset + 20);
                }
            });

            if (node) observer.current.observe(node);
        },
        [searchLoading, hasMore],
    );

    return (
        <HomeLayout loading={loading}>
            <PlaylistDataContainer>
                <img src="/images/playlist.jpeg" alt={data?.name} />
                <div>
                    <StyledPlaylistName>{data?.name}</StyledPlaylistName>
                    <p>{data?.description}</p>
                    <button onClick={deletePlaylist}>
                        <MdDelete />
                    </button>
                </div>
            </PlaylistDataContainer>
            <StyledPlaylistTrack>
                {playlistsTrack?.map((track) => (
                    <TrackCard
                        key={track.id}
                        track={track}
                        action={() => removeTrack(track)}
                        actionText="x"
                    />
                ))}
            </StyledPlaylistTrack>
            {showSearch ? (
                <StyledSearchSection>
                    <StyledFlexContainer
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <h3>Let's find something for your playlist</h3>
                        <StyledSearchButton
                            onClick={() => setShowSearch(false)}
                        >
                            x
                        </StyledSearchButton>
                    </StyledFlexContainer>
                    <StyledSearchInput
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setOffset(0);
                        }}
                        placeholder="Search for songs"
                    />
                    <StyledTrackList>
                        {searchData?.map((track, index) => {
                            if (searchData.length === index + 1) {
                                return (
                                    <TrackCard
                                        key={track.id}
                                        track={track}
                                        action={() => addTrack(track)}
                                        actionText="Add"
                                        ref={lastTrackElementRef}
                                    />
                                );
                            } else {
                                return (
                                    <TrackCard
                                        key={track.id}
                                        track={track}
                                        action={() => addTrack(track)}
                                        actionText="Add"
                                    />
                                );
                            }
                        })}
                    </StyledTrackList>
                </StyledSearchSection>
            ) : (
                <StyledFlexContainer
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <StyledSearchButton onClick={() => setShowSearch(true)}>
                        Find more
                    </StyledSearchButton>
                </StyledFlexContainer>
            )}
        </HomeLayout>
    );
};

export default Playlist;
