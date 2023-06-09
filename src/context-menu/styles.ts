import styled from 'styled-components';

export const StyledMenu = styled.menu<{
  top: number;
  left: number;
  visible: boolean;
}>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: 0;
  background-color: var(--context-menu-bg);
  position: fixed;
  z-index: 2;
  color: var(--base);
  border-radius: 4px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.3), 0 6px 8px rgba(0, 0, 0, 0.2);
  max-height: calc(100vh - 24px);
  max-width: 350px;
  min-width: 160px;
  overflow-y: auto;
  padding: 4px;

  span {
    padding: 8px 8px;
    font-size: 0.815rem;
    font-weight: 600;
  }
  p {
    color: var(--sub);
    padding: 8px 8px;
    font-size: 0.715rem;
    font-weight: 400;
  }
  button {
    width: 100%;
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    gap: 30px;
    padding: 12px;
    cursor: pointer;
    color: inherit;
    font-size: 0.875rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.1);
    }
  }

  &.active {
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden scroll;
  button {
    padding: 24px 16px;
  }
`;
