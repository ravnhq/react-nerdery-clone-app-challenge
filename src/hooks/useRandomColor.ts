export const colors = [
  '#27856a',
  '#283ea3',
  '#1e3264',
  '#8d67ab',
  '#e8115b',
  '#7358ff',
  '#b49bc8',
  '#f037a5',
  '#9cf0e1',
  '#e1118b',
  '#d7f27d',
];
export const useGenerateRandomColor = () => {
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return { getRandomColor };
};
