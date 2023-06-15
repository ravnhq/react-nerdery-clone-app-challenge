import styled from "styled-components";

export const PlaceAboutSubtitle = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.light}`};
`;
export const PlaceAboutLayout = styled.div`
  padding: 20px;
`;

export const PlaceAboutIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral03}`};
  padding-bottom: 20px;
`;
export const PlaceAboutFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0px;
`;
export const PlaceAboutFeaturesItems = styled.div`
  display: flex;
  gap: 20px;
  > div:last-child {
    font-size: ${({ theme }) => `${theme.fontSize.l}`};
  }
`;
export const PlaceAboutParagraph = styled.div`
  line-height: 24px;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
`;
