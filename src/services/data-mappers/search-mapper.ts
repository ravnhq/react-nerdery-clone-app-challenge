import { Section } from '../../shared/types/section';
import { SectionItem } from '../../shared/types/section-item';
import { sectionsDisplayNames } from './utils';
import { SearchSpotifyObjects } from '../../shared/types/spotify-objects';
import { normalizeEntity } from './entity-mapper';

export const searchMapper = (searchSections: SpotifyApi.SearchResponse) => {
  return Object.keys(searchSections).map(searchKey => {
    const typedSearchKey = searchKey as keyof typeof searchSections;
    const searchSection = searchSections[typedSearchKey];

    // Filtered in this way beacuse of the union of array types bug on TS
    // https://github.com/microsoft/TypeScript/issues/44373

    const filteredItems: SearchSpotifyObjects[] = [];
    searchSection?.items.forEach(item => {
      if (item) filteredItems.push(item);
    });

    const sectionItems = filteredItems?.map<SectionItem>(item => {
      return normalizeEntity(item);
    });
    return {
      items: sectionItems ?? [],
      title: sectionsDisplayNames[typedSearchKey],
      uri: searchKey,
      id: searchKey.slice(0, -1),
    } as Section;
  });
};
