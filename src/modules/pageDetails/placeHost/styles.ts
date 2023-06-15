import styled from "styled-components";

export const PlaceHostLayout = styled.div`
  background-color: ${({ theme }) => `${theme.colors.neutral09}`};
  padding: 32px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HostCard = styled.div`
  background-color: ${({ theme }) => `${theme.colors.shade01}`};
  border-radius: 12px;
  display: flex;
  max-width: 300px;
  padding: 20px 10px;
  gap: 50px;
  box-shadow: ${({ theme }) => `${theme.elevation.elevation01}`};
`;
export const HostInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HostName = styled.div`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.bold}`};
  margin-bottom: 5px;
`;

export const HostStatisticsItem = styled.div`
  padding: 10px 0px;
  font-size: ${({ theme }) => `${theme.fontSize.s}`};
`;
export const HostStatistics = styled.div`
  > div:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
export const PlaceHostSpan = styled.div`
  display: block;
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.bold}`};
`;
export const PlaceHostTitle = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  font-weight: ${({ theme }) => `${theme.weight.light}`};
`;
export const MessageButton = styled.button`
  color: ${({ theme }) => `${theme.colors.shade01}`};
  background-color: ${({ theme }) => `${theme.colors.shade02}`};
  padding: 14px 24px;
  border-radius: 8px;
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
  max-width: fit-content;
`;
export const PlaceHostFact = styled.div`
  > p {
    font-size: ${({ theme }) => `${theme.fontSize.l}`};
  }
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const UserIcon = styled.img<{ src: string }>`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  content: url(${({ src }) => `${src}`});
`;
