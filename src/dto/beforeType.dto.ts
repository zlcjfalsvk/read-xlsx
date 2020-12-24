import { BeforeType, XlsxType } from '../type/type';

export class BeforeTypeDto implements BeforeType {
  beforeId: number;
  beforeName: string;
  beforeGender: string;

  constructor(data: XlsxType) {
    this.beforeId = data.beforeId;
    this.beforeName = data.beforeName;
    this.beforeGender = data.beforeGender;
  }
}
