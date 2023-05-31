import styled from 'styled-components';

export const ShelfSection = styled.section`
  --shelf-min-height: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  min-height: var(--shelf-min-height);
  max-width: 100%;
  position: relative;
  contain-intrinsic-size: auto var(--shelf-min-height);
  content-visibility: auto;
`;

export const ShelfTitleContainer = styled.div`
  flex-grow: 1;
  min-width: 0;
  h2 {
    color: var(--base);
    font-size: 1.5rem;
    font-weight: 700;
    a {
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const ShelfLinkContainer = styled.div`
  font-weight: 700;
  a {
    color: var(--unactive);
    text-decoration: none;
  }
`;
