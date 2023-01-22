import { CoffeeDataResponse, Size, CoffeeType, Extra } from '../types';

type GetTypeData = (
  coffeeData: CoffeeDataResponse,
  typeId: string
) => CoffeeType | undefined;

type GetSizesAndExtras = (
  coffeeData: CoffeeDataResponse,
  typeId: string
) => {
  sizes: Size[];
  extras: Extra[];
};

const getTypeData: GetTypeData = (coffeeData, typeId) =>
  coffeeData.types.find(type => type._id === typeId);

export const getSizesAndExtras: GetSizesAndExtras = (coffeeData, typeId) => {
  const type = getTypeData(coffeeData, typeId);
  if (!type) {
    throw new Error(`No coffee type with id ${typeId} found`);
  }
  const sizes = coffeeData.sizes.filter(size => type.sizes.includes(size._id));
  const extras = coffeeData.extras.filter(extra =>
    type.extras.includes(extra._id)
  );
  return { sizes, extras };
};
