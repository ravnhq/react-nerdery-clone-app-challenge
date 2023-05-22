import styled from 'styled-components';
import type * as CSS from 'csstype';
interface BoxProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  border?: string;
  background?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
}

export const Box = styled.div<BoxProps>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  border: ${({ border }) => border || 'none'};
  background: ${({ background }) => background || 'none'};
  min-width: ${({ minWidth }) => minWidth || 'none'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  min-height: ${({ minHeight }) => minHeight || 'none'};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
`;

interface FlexProps extends BoxProps {
  direction?: 'row' | 'column';
  justifyContent?: CSS.Property.JustifyContent;
  justifyItems?: CSS.Property.JustifyItems;
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'wrap' | 'nowrap';
  gap?: string;
}

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  justify-items: ${({ justifyItems }) => justifyItems || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
`;
