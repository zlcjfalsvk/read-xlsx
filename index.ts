import * as fs from 'fs';
import * as path from 'path';

import { readSheet, XlsxType } from './src/index';
import { BeforeType, AfterType } from './src/type/type';
import { BeforeTypeDto } from './src/dto/beforeType.dto';
import { AfterTypeDto } from './src/dto/afterType.dto';
import { writeSheet, writeSheetAppend } from './src/write-sheet';

const file = fs.readFileSync(path.join(__dirname, 'resource/data.xlsx'));
const data: XlsxType[] = readSheet(file);

// data.forEach((item) => {
//   const beforeData: BeforeType = new BeforeTypeDto(item);
//   const afterData: AfterType = item.afterId ? new AfterTypeDto(item) : undefined;

//   console.log(beforeData);
//   console.log(afterData);
// });

writeSheet(data);
// writeSheetAppend(data, file);
