import { AfterType, XlsxType } from '../type/type';

export class AfterTypeDto implements AfterType {
  afterId: number;
  afterName: string;
  afterGender: string;

  constructor(data: XlsxType) {
    this.afterId = data.afterId;
    this.afterName = data.afterName;
    this.afterGender = data.afterGender;
  }
}
