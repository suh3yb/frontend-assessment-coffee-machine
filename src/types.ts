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

export interface State {
  activeStepIndex: number;
  selectedType: string | null;
  selectedSize: string | null;
  selectedExtras: string[] | [];
}

export type Action =
  | { type: 'setActiveStepIndex'; payload: number }
  | { type: 'setType'; payload: string }
  | { type: 'setSize'; payload: string }
  | { type: 'addExtra'; payload: string }
  | { type: 'reset' };
