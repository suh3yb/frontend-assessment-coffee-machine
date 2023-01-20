import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '../shared/Button';

import { Step } from '../shared/Step';

type Option = { _id: string; name: string };

interface Props {
  subtitle: string;
  title: string;
  options: Option[];
}

const OptionList = styled.ul``;

const SelectionStep: React.FC<Props> = ({ subtitle, title, options }) => {
  const mapOptionsToButtons = useMemo(
    () =>
      options.map(option => (
        <Button key={option._id} as="li">
          {option.name}
        </Button>
      )),
    [options]
  );

  return (
    <Step subtitle={subtitle} title={title}>
      <OptionList>{mapOptionsToButtons}</OptionList>
    </Step>
  );
};

export default SelectionStep;
