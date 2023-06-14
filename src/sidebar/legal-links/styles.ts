import styled from 'styled-components';

export const LegalLinksWrapper = styled.div`
  overflow: hidden;
  z-index: 1;
  display: block;
`;

export const LegalLinksList = styled.div`
  margin: 32px 0;
  padding: 0 24px;
  text-align: start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LegalLink = styled.div`
  margin-right: 16px;
  margin-bottom: 8px;
  a {
    color: var(--soft);
    text-decoration: none !important;
    line-height: inherit !important;
    border: none !important;
    padding: 0px !important;
    font-size: 0.6875rem;
    font-weight: 400;
  }
`;
