import styled from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { Flex } from '../../shared/ui/flex';
import { RefObject, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { SEARCH_ROUTE } from '../../shared/constants/router';
import { InputChangeEvent } from '../../shared/types/input-change-event';
import { useParams } from 'react-router-dom';

import { useDebouncedCallback } from 'use-debounce';

const SearchContainer = styled.div`
  flex: 0 1 364px;
  position: relative;
`;

const TextField = styled.input`
  border: 0;
  border-radius: 500px;
  color: #000;
  height: 40px;
  padding: 6px 48px;
  text-overflow: ellipsis;
  width: 100%;
`;

const IconSpan = styled.span`
  flex: 1 1 0%;
  color: var(--base);
`;

const HANDLER_MS_WAIT = 300;

const handleExtraParam = (extraParam: string | undefined) => {
  if (extraParam) return `/${extraParam}`;
  return '';
};

export function SearchInput() {
  const navigate = useNavigate();

  const { text: textParam, filter } = useParams();
  const extraParam = handleExtraParam(filter);

  const inputRef = useRef() as RefObject<HTMLInputElement>;

  const [searched, setSearched] = useState(textParam || '');

  if (inputRef && inputRef.current) {
    inputRef.current.focus();
  }

  const debouncedNavigate = useDebouncedCallback((text: string) => {
    navigate(text, {
      replace: false,
      state: text,
    });
  }, HANDLER_MS_WAIT);

  const textHandler = (e: InputChangeEvent) => {
    const text = e.currentTarget.value;
    setSearched(encodeURIComponent(text));

    const redirectString = `${SEARCH_ROUTE}/${encodeURIComponent(
      text,
    )}${extraParam}`;

    if (text === '') debouncedNavigate(`${SEARCH_ROUTE}`);
    else debouncedNavigate(redirectString);
  };

  return (
    <Flex
      style={{
        flexGrow: 1,
      }}
      align="center"
    >
      <SearchContainer data-testid="text-input-container">
        <form role="search">
          <TextField
            data-testid="text-input"
            ref={inputRef}
            value={decodeURIComponent(searched)}
            maxLength={800}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="What do you listen to?"
            onChange={textHandler}
            style={{ color: 'rgb(0, 0, 0)' }}
          />
        </form>
        <Flex
          align="center"
          style={{
            position: 'absolute',
            right: '12px',
            left: '12px',
            bottom: '0',
            top: '8px',
            pointerEvents: 'none',
          }}
        >
          <IconSpan>
            <SearchIcon />
          </IconSpan>
        </Flex>
      </SearchContainer>
    </Flex>
  );
}
