import {generateSingleNumber} from './generateSingleNumber'

export const generateNumbers = (totalNumberToGenerate) => {
  const numbersList = [];
  for (let i = 0; i < totalNumberToGenerate; i++) {
    numbersList.push(generateSingleNumber());
  }
  return numbersList;
};
