import styled from 'styled-components';

export const HomeDiv = styled.div`
  height: 1000px;

  .header-spacer {
    height: 64px;
  }
`;

export const LightDiv = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.6) 0,
      var(--main-base-color) 100%
    ),
    var(--background-noise);
  height: 332px;
  margin-top: -64px;
  position: absolute;
  transition: background 1s ease;
  width: 100%;
  z-index: 0;
`;

export const StyledMain = styled.main`
  position: relative;
`;
