import styled, { css } from 'styled-components';
import { CircularAlertIcon } from '../../assets/icons';
import { SimpleComponent } from '../../shared/types/simple-component';
import { Link } from 'react-router-dom';

const inputStyles = css`
  appearance: none;
  background-image: none;
  border: 0px;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  transition: box-shadow 0.1s ease-in-out 0s, color 0.1s ease-in-out 0s;
  inline-size: 100%;
  box-sizing: border-box;
  margin-block: 0px;
  border-radius: 4px;
  padding-inline: 14px;
  padding-block-start: 8px;
  padding-block-end: 8px;
  min-block-size: 48px;
  background-color: var(--background-base, #ffffff);
  box-shadow: inset 0 0 0 1px var(--sub);
  color: var(--text-base, #000000);

  &:hover {
    box-shadow: inset 0 0 0 1px var(--input-highlight, #000000);
  }
`;

export const FormGroup = styled.div<{ width?: string }>`
  position: relative;
  width: 100%;
  label,
  legend {
    color: black;
    box-sizing: border-box;
    font-size: 0.875rem;
    font-weight: 700;
    align-items: center;
    display: flex;
    inline-size: 100%;
    span {
      padding: 0 16px;
    }
  }
`;

export const TextInput = styled.input`
  ${inputStyles}
`;

export const SelectInput = styled.select`
  ${inputStyles}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ErrorMessage = ({ children, className }: SimpleComponent) =>
  children ? (
    <span className={className}>
      <CircularAlertIcon style={{ marginRight: '5px' }} />
      {children}
    </span>
  ) : null;

export const StyledErrorMessage = styled(ErrorMessage)`
  box-sizing: border-box;
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-block-start: 8px;
  color: var(--error, #d31225);
  svg {
    block-size: 1.25rem;
    margin-inline-end: 4px;
    flex-shrink: 0;
    fill: var(--error);
  }
`;

export const StyledLink = styled(Link)`
  color: var(--link-color, white);
`;

export const ExtraMessageContainer = styled.span`
  text-align: center;
`;
