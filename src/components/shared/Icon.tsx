import React from 'react';

import { ReactComponent as Cappuccino } from '../images/cappuccino.svg';
import { ReactComponent as Espresso } from '../images/espresso.svg';
import { ReactComponent as SizeSmall } from '../images/size-small.svg';
import { ReactComponent as SizeMedium } from '../images/size-medium.svg';
import { ReactComponent as SizeLarge } from '../images/size-large.svg';
import { ReactComponent as Milk } from '../images/milk.svg';

interface Props {
  name: string;
}

const mapIdsToIcons: Record<string, React.FunctionComponent> = {
  '60ba1a062e35f2d9c786c56d': Espresso, // ristretto
  '60be1db3c45ecee5d77ad890': SizeSmall, // espresso
  '60be1eabc45ecee5d77ad960': Cappuccino, // cappuccino
  '60ba33dbc45ecee5d77a01f8': SizeSmall,
  '60ba18d13ca8c43196b5f606': SizeMedium,
  '60ba3368c45ecee5d77a016b': SizeLarge,
  '60ba197c2e35f2d9c786c525': Cappuccino, // sugar
  '60ba34a0c45ecee5d77a0263': Milk,
};

export const Icon: React.FC<Props> = ({ name }) => {
  const Component = mapIdsToIcons[name];

  return Component ? <Component /> : null;
};
