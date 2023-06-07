// export const getTagsSearchFilters = (sections: Section[] | null) => {
//   const sectionsTitles =
//     sections?.map(section => ({ name: section.title, value: section.id })) ??
//     [];

//   return [{ name: 'All', value: '' }, ...sectionsTitles];
// };

export const getTagsSearchFilters = [
  { name: 'All', value: '' },
  { value: 'album', name: 'Album' },
  { value: 'artist', name: 'Artist' },
  { value: 'playlist', name: 'Playlist' },
  { value: 'track', name: 'Track' },
  { value: 'show', name: 'Show' },
  { value: 'episode', name: 'Episode' },
];
