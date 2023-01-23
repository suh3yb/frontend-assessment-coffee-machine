import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import type { Extra, SelectedExtras } from '../../types';
import {
  Button as BaseButton,
  BUTTON_HEIGHT,
  SUB_BUTTON_HEIGHT,
  SubButton as BaseSubButton,
} from './Button';
import { Icon } from './Icon';
import { Separator as BaseSeparator } from './Separator';

interface Props {
  option: Extra;
  selectedExtras: SelectedExtras;
  handler: ({
    optionId,
    optionName,
    subselectionId,
    subselectionName,
  }: {
    optionId: string;
    optionName: string;
    subselectionId: string;
    subselectionName: string;
  }) => void;
}

const calculateMaxHeight = (nrOfSubselections: number) => {
  return BUTTON_HEIGHT + nrOfSubselections * (SUB_BUTTON_HEIGHT + 8) + 36;
};

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

const SubselectionWrapper = styled.div``;

const Separator = styled(BaseSeparator)`
  margin-bottom: 16px;
`;

const SubselectionList = styled.ul`
  padding: 0 24px;
`;

const OptionWrapper = styled.div<{
  isOptionSelected: boolean;
  nrOfSubselections: number;
}>`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  max-height: ${BUTTON_HEIGHT}px;
  padding-bottom: 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.buttonBgLight};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  transition: max-height 0.2s ease-in-out;

  & ${Button} {
    margin-bottom: 0;
    box-shadow: none;
  }

  & ${SubselectionWrapper} {
    opacity: 0;
    transform: scale(0.97);
    pointer-events: none;
    transition: opacity 0.1s ease, transform 0.2s ease;
  }

  ${({ isOptionSelected, nrOfSubselections }) =>
    isOptionSelected &&
    css`
      max-height: ${calculateMaxHeight(nrOfSubselections)}px;

      & ${SubselectionWrapper} {
        opacity: 1;
        transform: scale(1);
        pointer-events: auto;
        transition-delay: 0.2s;
      }
    `}
`;

const SubButton = styled(BaseSubButton)<{ isSelected: boolean }>`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  justify-content: space-between;

  & > svg {
    width: 24px;
    flex-shrink: 0;

    & #checked {
      display: ${({ isSelected }) => (isSelected ? 'auto' : 'none')};
    }
  }
`;

export const OptionWithSubselection: React.FC<Props> = ({
  option,
  selectedExtras,
  handler,
}) => {
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [selectedSuboption, setSelectedSuboption] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!Object.keys(selectedExtras).includes(option._id)) {
      setSelectedSuboption(null);
    }
  }, [option._id, selectedExtras]);

  const handleSubButtonClick = useCallback(
    (subselectionId: string, subselectionName: string) => {
      setSelectedSuboption(subselectionId);
      handler({
        optionId: option._id,
        optionName: option.name,
        subselectionId,
        subselectionName,
      });
    },
    [handler, option._id, option.name]
  );

  return (
    <OptionWrapper
      isOptionSelected={isOptionSelected}
      nrOfSubselections={option.subselections.length}
    >
      <Button as="li" onClick={() => setIsOptionSelected(!isOptionSelected)}>
        <Icon name={option._id} />
        <span>{option.name}</span>
      </Button>
      <SubselectionWrapper>
        <Separator />
        <SubselectionList>
          {option.subselections.map(subselection => (
            <SubButton
              key={subselection._id}
              as="li"
              isSelected={selectedSuboption === subselection._id}
              onClick={() =>
                handleSubButtonClick(subselection._id, subselection.name)
              }
            >
              {subselection.name}
              <Icon name="checkmark" />
            </SubButton>
          ))}
        </SubselectionList>
      </SubselectionWrapper>
    </OptionWrapper>
  );
};
