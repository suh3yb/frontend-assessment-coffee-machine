import React from 'react';
import styled from 'styled-components';

import type { CoffeeType, Size } from '../../types';
import { Button as BaseButton } from './Button';
import { Icon } from './Icon';

interface Props {
  option: CoffeeType | Size;
  handler: ({ id, name }: { id: string; name: string }) => void;
}

const Button = styled(BaseButton)`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  & > svg {
    margin-right: 20px;
    width: 48px;
    height: 48px;
  }
`;

export const Option: React.FC<Props> = ({ option, handler }) => (
  <Button
    as="li"
    onClick={() => handler({ id: option._id, name: option.name })}
  >
    <Icon name={option._id} />
    <span>{option.name}</span>
  </Button>
);
