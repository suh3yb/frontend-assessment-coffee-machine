import { Dispatch } from 'react';

export interface CoffeeType {
  _id: string;
  name: string;
  sizes: string[];
  extras: string[];
}

export interface Size {
  _id: string;
  name: string;
  __v?: number;
}

export interface Extra {
  _id: string;
  name: string;
  subselections: {
    _id: string;
    name: string;
  }[];
}

export interface CoffeeDataResponse {
  _id: string;
  types: CoffeeType[];
  sizes: Size[];
  extras: Extra[];
}

export interface SelectedExtras {
  [extraId: string]: {
    name: string;
    subselection: { id: string; name: string };
  };
}

export interface State {
  coffeeData: CoffeeDataResponse | undefined;
  activeStepIndex: number;
  selectedType: { id: string; name: string } | null;
  availableSizes: Size[] | null;
  availableExtras: Extra[] | null;
  selectedSize: { id: string; name: string } | null;
  selectedExtras: SelectedExtras;
}

export type Action =
  | { type: 'setCoffeeData'; payload: CoffeeDataResponse }
  | { type: 'setActiveStepIndex'; payload: number }
  | { type: 'setType'; payload: { id: string; name: string } }
  | { type: 'setAvailableSizes'; payload: Size[] }
  | { type: 'setAvailableExtras'; payload: Extra[] }
  | { type: 'setSize'; payload: { id: string; name: string } }
  | {
      type: 'addExtra';
      payload: {
        extra: { id: string; name: string };
        subselection: { id: string; name: string };
      };
    }
  | {
      type: 'removeExtra';
      payload: string; // extra id
    }
  | { type: 'reset' };

export interface StepProps {
  state: State;
  dispatch: Dispatch<Action>;
}
