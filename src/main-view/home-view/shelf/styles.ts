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
`;

export const ShelfLinkContainer = styled.div`
  font-weight: 700;
  a {
    color: var(--unactive);
    text-decoration: none;
  }
`;
