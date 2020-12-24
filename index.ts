import * as fs from 'fs';
import * as path from 'path';

import { readFirstSheet } from './src/index';

const file = fs.readFileSync(path.join(__dirname, 'resource/data.xlsx'));
const data = readFirstSheet(file);

console.log(data);
