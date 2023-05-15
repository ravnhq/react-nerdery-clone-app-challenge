import styled from 'styled-components';

const LegalLinksWrapper = styled.div`
  overflow: hidden;
  z-index: 1;
  display: block;
`;

const LegalLinksList = styled.div`
  margin: 32px 0;
  padding: 0 24px;
  text-align: start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LegalLink = styled.div`
  margin-right: 16px;
  margin-bottom: 8px;
  a {
    color: #a7a7a7;
    text-decoration: none !important;
    line-height: inherit !important;
    border: none !important;
    padding: 0px !important;
    font-size: 0.6875rem;
    font-weight: 400;
  }
`;

const legalLinks = [
  {
    title: 'Legal',
    url: '/legal',
  },
  {
    title: 'Centro de privacidad',
    url: '/privacy-center',
  },
  {
    title: 'Política de privacidad',
    url: '/privacy-policy',
  },
  {
    title: 'Cookies',
    url: '/cookies',
  },
  {
    title: 'Información sobre anuncios',
    url: '/ad-info',
  },
];

export const LegalLinks: React.FC = () => (
  <LegalLinksWrapper>
    <LegalLinksList>
      {legalLinks.map(link => (
        <LegalLink key={link.title}>
          <a href={link.url}>
            <span>{link.title}</span>
          </a>
        </LegalLink>
      ))}
    </LegalLinksList>
  </LegalLinksWrapper>
);
