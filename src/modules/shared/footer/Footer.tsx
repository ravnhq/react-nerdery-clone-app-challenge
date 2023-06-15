import styled from "styled-components";
import { Globe } from "../../../assets";

const Footeri = styled.div`
  background-color: ${({ theme }) => `${theme.colors.shade0205}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.shade0230}`};
  padding: 0px 30px;
  font-size: ${({ theme }) => `${theme.fontSize.m}`};
  h3 {
    font-size: 14px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  li {
    color: ${({ theme }) => `${theme.colors.linkGray}`};
  }
  h3 {
    margin-bottom: 1rem;
  }
  .siteLinks {
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (min-width: 740px) {
      display: none;
    }
    div {
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.shade0230}`};
      padding: 25px 0;
    }
  }
  .legalLinks {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
    @media (min-width: 740px) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    ul {
      display: flex;
      flex-direction: row;
    }
    > div:first-child {
      color: ${({ theme }) => `${theme.colors.shade02}`};
      font-weight: ${({ theme }) => `${theme.weight.bold}`};
    }
    div:nth-child(2) {
      color: ${({ theme }) => `${theme.colors.linkGray}`};
      div:first-child {
        margin-bottom: 5px;
      }
    }
    /* li::before {
      content: "· ";
    } */
  }
`;

export const Footer = () => {
  return (
    <Footeri>
      <div className="siteLinks">
        <div>
          <h3>Support</h3>
          <ul>
            <li> Help Center</li>
            <li>Safety Information</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
            <li>Our COVID-19 Response</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neightborhood concern</li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Support: Afghan refugees </li>
            <li>Celebrating diversity & belonging</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
        <div>
          <h3>Hosting</h3>
          <ul>
            <li>Try hosting</li>
            <li>AirCover: protection for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly </li>
          </ul>
        </div>
        <div>
          <h3>About</h3>
          <ul>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Carrers</li>
            <li>Investors </li>
            <li>Airbnb Luxe</li>
          </ul>
        </div>
      </div>
      <div className="legalLinks">
        <div>
          <Globe height={15.5} width={15.5} />
          English(US) $USD
        </div>
        <div>
          <div>© 2023 Airbnb, Inc.</div>
          <div>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </Footeri>
  );
};
