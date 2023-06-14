import { getLegalLinks } from '../../services/static-data';
import { LegalLink, LegalLinksList, LegalLinksWrapper } from './styles';

const legalLinks = getLegalLinks();

export const LegalLinks: React.FC = () => (
  <LegalLinksWrapper>
    <LegalLinksList>
      {legalLinks.map(link => (
        <LegalLink key={link.url}>
          <a href={link.url}>
            <span>{link.title}</span>
          </a>
        </LegalLink>
      ))}
    </LegalLinksList>
  </LegalLinksWrapper>
);
