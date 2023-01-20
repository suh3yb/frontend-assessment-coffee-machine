export interface CoffeeDataResponse {
  _id: string;
  types: {
    _id: string;
    name: string;
    sizes: string[];
    extras: string[];
  }[];
  sizes: {
    _id: string;
    name: string;
    __v?: number;
  }[];
  extras: {
    _id: string;
    name: string;
    subselections: {
      _id: string;
      name: string;
    }[];
  }[];
}
