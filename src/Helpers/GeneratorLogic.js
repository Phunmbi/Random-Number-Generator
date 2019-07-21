import {generateSingleNumber} from './generateSingleNumber'

export const generateNumbers = (totalNumberToGenerate) => {
  const numbersList = [];
  for (let i = 0; i < totalNumberToGenerate; i++) {
    const singleNumber = generateSingleNumber();

    const checkUniquenessOfNumber = numbersList.find((element) => {
      return element === singleNumber
    });

    if (checkUniquenessOfNumber === undefined) {
      numbersList.push(generateSingleNumber())
    }
  }
  return numbersList;
};
