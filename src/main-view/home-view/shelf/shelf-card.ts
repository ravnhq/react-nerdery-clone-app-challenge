import styled from 'styled-components';

interface ShelfCardContainerProps {
  gridGap: number;
  columnCount: number;
  minContainerWidth: number;
  columnWidth?: number;
}
export const ShelfCardsContainer = styled.div<ShelfCardContainerProps>`
  grid-column-gap: ${props => props.gridGap}px;
  display: grid;
  grid-template-columns: repeat(${props => props.columnCount}, minmax(0, 1fr));
  min-width: ${props => props.minContainerWidth}px;
  --column-width: ${props => props.columnWidth}px;

  grid-auto-flow: row;
  grid-auto-rows: 0px;
  grid-template-rows: 1fr;

  @media (min-width: 1130px) and (max-width: 1300px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (min-width: 960px) and (max-width: 1130px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 820px) and (max-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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

    max-height: 4.5rem;

    a {
      div {
        color: var(--base);
        text-decoration: none;
        display: block;
        width: calc(100%);
        white-space: nowrap;

        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    div {
      font-weight: 400;
      font-size: 0.875rem;

      margin-top: 4px;
      margin-block: 0px;
      box-sizing: border-box;
      max-height: 3rem;

      overflow: hidden;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      text-overflow: ellipsis;
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
