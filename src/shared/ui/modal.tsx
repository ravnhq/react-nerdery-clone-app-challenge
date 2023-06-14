import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

const ModalOverlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div<{
  $light?: boolean;
  $width?: string;
  $height?: string;
}>`
  display: block;
  background: var(--main-base-color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  color: white;
  padding: 1rem;
  border-radius: 1rem;

  width: ${props => props.$width ?? '50%'};

  ${props =>
    props.$light &&
    css`
      background: var(--base);
      color: black;
    `};
`;

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  toggle: VoidFunction;
  light?: boolean;
  width?: string;
  height?: string;
}

export const Modal = ({
  children,
  isOpen,
  toggle,
  light,
  width,
  height,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={toggle}>
          <ModalBox
            onClick={e => e.stopPropagation()}
            $light={light}
            $width={width}
            $height={height}
          >
            {children}
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
};
