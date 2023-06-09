import styled from 'styled-components';

export const ImageContainer = styled.div<{ $img: string }>`
  background-image: url(${({ $img }) => $img});
  width: 100%;
  height: 40vh;
  max-height: none;
  min-height: 340px;

  padding: var(--content-spacing, 24px);

  color: #fff;
  display: flex;
  max-width: none;
  overflow: hidden;
  padding-bottom: 24px;
  position: relative;
`;

export const EntityDataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: flex-end;
  z-index: 0;
  text-transform: capitalize;
`;

export const EntityType = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  color: inherit;
`;

export const EntityName = styled.h1`
  box-sizing: border-box;
  margin-block: 0px;
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--base, #000000);

  margin: 0.08em 0px 0.12em;
  visibility: visible;
  width: 100%;
  font-size: 6rem;

  line-height: normal;
  margin-top: 8px;
  overflow: hidden;
  text-align: left;
  word-break: break-word;
`;
