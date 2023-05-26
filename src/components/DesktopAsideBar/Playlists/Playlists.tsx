import { useAuthorizationContext } from '../../../context/AuthorizationContext';
import { MdViewWeek, MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const StyledPlaylistsContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0 10px;
`;

const StyledTitle = styled.h2`
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin: 0;
    font-weight: 400;
    font-size: 1.15rem;
    color: white;
    padding: 10px 12px;
`;

const StyledPlaylistHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledPlaylistButton = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;

    &:hover {
        background-color: #282828;
    }
`;

const Playlists = () => {
    const { isAuth } = useAuthorizationContext();

    const handleClick = () => {
        if (!isAuth) {
            alert('You need to be logged in to create a playlist');
        }
    };

    return (
        <StyledPlaylistsContainer>
            <StyledPlaylistHeader>
                <StyledTitle>
                    <MdViewWeek />
                    <span>Your Library</span>
                </StyledTitle>
                <StyledPlaylistButton onClick={handleClick}>
                    <MdAdd />
                </StyledPlaylistButton>
            </StyledPlaylistHeader>
        </StyledPlaylistsContainer>
    );
};

export default Playlists;
