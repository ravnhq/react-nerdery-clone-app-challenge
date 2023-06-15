import styled from "styled-components";

export const PlaceInformationH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.xxxl}`};
`;
export const PlaceInformationH2 = styled.h2`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
`;
export const PlaceInformationLayout = styled.div`
  padding: 24px;
`;
export const PlaceInformationStatistics = styled.div`
  display: flex;
  gap: 10px;
  > div:not(:first-child) {
    text-decoration: underline;
  }
`;
export const PlaceInformationHeader = styled.div`
  padding-bottom: 20px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral03}`};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PlaceInformationFeature = styled.div`
  padding: 20px 0px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral03}`};
`;

export const PlaceInformationFeatureHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const PlaceInformationFeatureCard = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.neutral06}`};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  padding: 16px;
  justify-content: space-between;
  gap: 20px;
  div:last-child {
    font-size: ${({ theme }) => `${theme.fontSize.s}`};
  }
`;
export const PlaceInformationCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
export const PlaceInformationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0px;
`;
export const PlaceInformationListItem = styled.div`
  display: flex;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const PlaceInformationListItemTitle = styled.div`
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
`;
export const PlaceInformationListItemSubtitle = styled.div`
  color: ${({ theme }) => `${theme.colors.neutral06}`};
`;
