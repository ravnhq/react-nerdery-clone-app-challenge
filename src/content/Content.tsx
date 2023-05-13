import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1640px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default Content;
