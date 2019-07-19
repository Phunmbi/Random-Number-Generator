import FileSaver from 'file-saver';

export const generateNumbers = (totalNumberToGenerate) => {
  const numbersList = [];
  for (let i = 0; i < totalNumberToGenerate; i++) {
    numbersList.push(generateSingleNumber());
  }
  return numbersList;
};

const generateSingleNumber = () => {
  return `0${Math.floor(Math.random() * 1000000000)}`;
};

export const saveToFile = (generatedNumbers) => {
  let blob = new Blob([generatedNumbers], {type: "text/plain;charset=utf-8"});
  FileSaver.saveAs(blob, "generatedNumbers.txt");
};

export const sortDescending = (generatedNumbers) => {
  return generatedNumbers.sort((a, b) => parseInt(b) - parseInt(a));
};

export const sortAscending = (generatedNumbers) => {
  return generatedNumbers.sort();
};
