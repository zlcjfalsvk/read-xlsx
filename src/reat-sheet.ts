import * as XLSX from 'xlsx';

const {
  read,
  utils: { sheet_to_json },
} = XLSX;

export const readSheet = <T extends unknown>(xlsxBuffer: any, options?: XLSX.ParsingOptions): T[] => {
  const wb: XLSX.WorkBook = read(xlsxBuffer, options);
  const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
  return sheet_to_json(ws);
};
