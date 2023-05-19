import { getLegalLinks } from '../../services/static-data';

const legalLinks = getLegalLinks();

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
