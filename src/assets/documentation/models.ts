export interface CodeObject {
  title: string;
  description: string;
  reactCode: string;
  vueCode: string;
}

export interface IExampleRecord {
  [key: string]: CodeObject
}
