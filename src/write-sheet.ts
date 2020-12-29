import * as XLSX from 'xlsx';

const {
  read,
  writeFile,
  utils: { json_to_sheet },
} = XLSX;

export const writeSheet = <T>(data: T[], options?: XLSX.WritingOptions): boolean => {
  const date = new Date();
  const writeData = json_to_sheet(data);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, writeData, `write`);
  writeFile(wb, `resource/new_${date.getTime()}.xlsx`);
  return true;
};

// 덮어쓰기
export const writeSheetAppend = <T>(data: T[], xlsxBuffer: any, options?: XLSX.WritingOptions): boolean => {
  const date = new Date();
  const wb: XLSX.WorkBook = read(xlsxBuffer);
  const writeData = json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, writeData, `write_${date.getTime()}`);
  writeFile(wb, 'resource/data.xlsx');
  return true;
};
