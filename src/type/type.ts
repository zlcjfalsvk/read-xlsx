export interface XlsxType extends AfterType, BeforeType {}

export interface AfterType {
  afterId: number;
  afterName: string;
  afterGender: string;
}

export interface BeforeType {
  beforeId: number;
  beforeName: string;
  beforeGender: string;
}
