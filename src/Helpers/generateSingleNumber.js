export const generateSingleNumber = () => {
  return`0${Math.floor(Math.random() * Number('9'.padEnd(9, 0)) + Number('1'.padEnd(9, 0)))}`;
};
