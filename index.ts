import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';

const {
  read,
  utils: { sheet_to_json },
} = XLSX;

const file = fs.readFileSync(path.join(__dirname, 'resource/data.xlsx'));

export const readFirstSheet = (data: any, options: XLSX.ParsingOptions) => {
  const wb: XLSX.WorkBook = read(data, options);
  const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
  return sheet_to_json(ws);
};

const data = readFirstSheet(file, {});

console.log(data);
