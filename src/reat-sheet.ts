import * as XLSX from 'xlsx';

const {
  read,
  utils: { sheet_to_json },
} = XLSX;

export const readFirstSheet = (data: any, options?: XLSX.ParsingOptions) => {
  const wb: XLSX.WorkBook = read(data, options);
  const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
  return sheet_to_json(ws);
};
