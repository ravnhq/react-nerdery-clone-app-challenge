import styled from 'styled-components';

interface ShelfCardContainerProps {
  gridGap: number;
  columnCount: number;
  minContainerWidth: number;
  columnWidth?: number;
}
export const ShelfCardsContainer = styled.div<ShelfCardContainerProps>`
  grid-gap: ${props => props.gridGap}px;
  display: grid;
  grid-template-columns: repeat(${props => props.columnCount}, minmax(0, 1fr));
  min-width: ${props => props.minContainerWidth}px;
  --column-width: ${props => props.columnWidth}px;

  grid-auto-rows: 0;
  grid-template-rows: 1fr;
  overflow-y: hidden;
`;

export const ShelfCard = styled.div`
  background: #181818;
  border-radius: calc(
    clamp(4px, (var(--column-width, 0px) - 32px) * 0.025, 8px) + 2px
  );
  flex: 1;
  isolation: isolate;
  padding: 16px;
  position: relative;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background: #282828;
  }
  .card-text {
    min-height: 62px;
    box-sizing: border-box;
    a {
      color: var(--base);
      text-decoration: none;
      display: inline-block;
      max-width: 100%;
      vertical-align: middle;
    }
    div {
      font-weight: 400;
      font-size: 0.875rem;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 4px;
      margin-block: 0px;
      box-sizing: border-box;
      white-space: normal;

      display: -webkit-box;
      -webkit-line-clamp: 2;
    }
  }

  .portrait {
    margin-bottom: 16px;
    --card-image-border-radius: clamp(
      4px,
      (var(--column-width, 0px) - 32px) * 0.025,
      8px
    );
    background-color: var(--card-color, #333);
    border-radius: var(--card-image-border-radius);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    padding-bottom: 100%;
    position: relative;
    width: 100%;
    img {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      --card-image-border-radius: clamp(
        4px,
        (var(--column-width, 0px) - 32px) * 0.025,
        8px
      );
      border-radius: var(--card-image-border-radius);
      display: block;
    }
  }
`;
