import FileSaver from "file-saver";

export const saveToFile = (generatedNumbers) => {
  let blob = new Blob([generatedNumbers], {type: "text/plain;charset=utf-8"});
  FileSaver.saveAs(blob, "generatedNumbers.csv");
};
