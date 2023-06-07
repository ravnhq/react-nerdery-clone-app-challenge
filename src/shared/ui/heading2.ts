import styled from 'styled-components';

export const Heading2 = styled.h2`
  color: ${props => props.color ?? 'var(--base)'};
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
`;
