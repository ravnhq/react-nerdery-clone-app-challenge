import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { StyledFlexContainer } from '../../components/Styles/shared/FlexContainer.styles';
import { Dispatch, forwardRef } from 'react';

interface Props {
    tab: string;
    setTab: (str: string) => void;
    search: string;
    setSearch: Dispatch<React.SetStateAction<string>>;
}

const StyledSearchInput = styled.input`
    background-color: transparent;
    border: transparent;
    outline: transparent;
    color: white;
    width: 100%;
`;

const StyledSearchForm = styled.div`
    box-sizing: border-box;
    color: white;
    padding: 0 16px;
    width: 330px;
    height: 48px;
    background-color: #242424;
    border-radius: 500px;
    border: none;
    display: flex;
    align-items: center;
    border: 1px solid #626262;

    &:focus-within {
        border: 1px solid white;
    }
`;

const StyledPill = styled.label<{ current: boolean }>`
    background-color: ${({ current }) => (current ? 'white' : '#242424')};
    display: inline-flex;
    justify-content: center;
    align-content: center;
    padding: 4px 12px;
    line-height: 14px;
    border-radius: 32px;
    color: ${({ current }) => (current ? 'black' : 'white')};
    font-size: 14px;
    cursor: pointer;
`;

const SearchBarContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #121212;
    padding: 20px 0;
`;

type Search = {
    tab: string;
    q: string;
};

const SearchBar: React.FC<Props> = ({ tab, setTab, search, setSearch }) => {
    return (
        <SearchBarContainer>
            <StyledSearchForm>
                <MdSearch size={20} />
                <StyledSearchInput
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="What do you want to listen to?"
                />
            </StyledSearchForm>
            <StyledFlexContainer columnGap="18px" marginTop="16px">
                <StyledPill
                    current={tab === 'album'}
                    onClick={() => setTab('album')}
                >
                    Albums
                </StyledPill>
                <StyledPill
                    current={tab === 'track'}
                    onClick={() => setTab('track')}
                >
                    Songs
                </StyledPill>
                <StyledPill
                    current={tab === 'artist'}
                    onClick={() => setTab('artist')}
                >
                    Artists
                </StyledPill>
                <StyledPill
                    current={tab === 'playlist'}
                    onClick={() => setTab('playlist')}
                >
                    Playlists
                </StyledPill>
            </StyledFlexContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;
