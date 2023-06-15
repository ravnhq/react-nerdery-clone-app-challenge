import styled from "styled-components";
import { Footer } from "../shared";
import { Link } from "react-router-dom";
import { Airbnb2 } from "../../assets";

const ErrorLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
`;

const ErrorMessage = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.xxl}`};
  margin-bottom: 20px;
`;
const ErrorParagraph = styled.p`
  font-size: ${({ theme }) => `${theme.fontSize.xl}`};
  margin-bottom: 12px;
`;
const ErrorLink = styled(Link)`
  color: ${({ theme }) => `${theme.colors.shade02}`};
  font-size: ${({ theme }) => `${theme.fontSize.l}`};
`;
const ErrorHeader = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral06}`};
  padding: 24px 12px;
`;
const ErrorLogo = styled(Airbnb2)`
  fill: ${({ theme }) => `${theme.colors.primary02}`};
`;
export const Error = () => {
  return (
    <>
      <ErrorHeader>
        <Link to={"/"}>
          <ErrorLogo />
        </Link>
      </ErrorHeader>
      <ErrorLayout>
        <ErrorMessage>
          We can't seem to find the page you're looking for
        </ErrorMessage>
        <ErrorParagraph>Here are some helpful links instead:</ErrorParagraph>
        <ErrorLink to={"/"}>Home</ErrorLink>
      </ErrorLayout>
      <Footer />
    </>
  );
};
