export const sortDescending = (generatedNumbers) => {
  return generatedNumbers.sort((a, b) => parseInt(b) - parseInt(a));
};
