import React from 'react';
import styled from 'styled-components';

import { Button as BaseButton, SubButton as BaseSubButton } from './Button';
import { Icon } from './Icon';
import { Separator } from './Separator';

interface Props {
  selectedOption: {
    id: string;
    name: string;
    subselection?: { id: string; name: string };
  };
  onClick: any; // @TODO update type
}

const Wrapper = styled.li`
  cursor: pointer;
`;

const Button = styled(BaseButton)`
  width: 100%;
  box-shadow: none;
  border-radius: 0;

  & > svg {
    margin-right: 20px;
    width: 48px;
    height: 48px;
  }
`;

const EditText = styled.span`
  margin-left: auto;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.4px;
  opacity: 0.87;
`;

const SubButton = styled(BaseSubButton)`
  margin: 16px 24px 20px;
  width: calc(100% - 48px);
  justify-content: space-between;

  & > svg {
    width: 24px;
    flex-shrink: 0;
  }
`;

export const OverviewItem: React.FC<Props> = ({ selectedOption, onClick }) => (
  <Wrapper onClick={onClick}>
    <Button>
      <Icon name={selectedOption.id} />
      <span>{selectedOption.name}</span>
      <EditText>Edit</EditText>
    </Button>
    {selectedOption.subselection && (
      <>
        <Separator />
        <SubButton>
          {selectedOption.subselection.name}
          <Icon name="checkmark" />
        </SubButton>
      </>
    )}
  </Wrapper>
);
