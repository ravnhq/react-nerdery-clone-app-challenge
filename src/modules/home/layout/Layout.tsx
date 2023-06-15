import styled from "styled-components";

interface Layout {
  display: string;
  direction?: string;
}

export const Layout = styled.div<Layout>`
  display: ${(props) => `${props.display}`};
  flex-direction: ${(props) =>
    props.display === "flex" ? `${props.direction}` : ""};
`;
