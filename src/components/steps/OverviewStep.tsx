import React from 'react';
import styled from 'styled-components';

import { Action, State } from '../../types';
import { Layout } from '../shared/Layout';
import { OverviewItem } from '../shared/OverviewItem';
import { Separator } from '../shared/Separator';
import { Button as BaseButton } from '../shared/Button';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const OverviewWrapper = styled.ul`
  margin-bottom: 48px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.buttonBgLight};
  overflow: hidden;
`;

const Button = styled(BaseButton)`
  margin-bottom: 24px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.374px;
`;

const OverviewStep: React.FC<Props> = ({ state, dispatch }) => {
  const selectedExtraIds = Object.keys(state.selectedExtras);

  return (
    <Layout
      subtitle="Brew with Lex"
      title="Select your extra's"
      optionNodes={
        <>
          <OverviewWrapper>
            {state.selectedType && (
              <>
                <OverviewItem
                  selectedOption={state.selectedType}
                  onClick={() =>
                    dispatch({ type: 'setActiveStepIndex', payload: 0 })
                  }
                />
              </>
            )}
            {state.selectedSize && (
              <>
                <Separator />
                <OverviewItem
                  selectedOption={state.selectedSize!}
                  onClick={() =>
                    dispatch({ type: 'setActiveStepIndex', payload: 1 })
                  }
                />
              </>
            )}
            {selectedExtraIds.length > 0 &&
              selectedExtraIds.map(extraId => (
                <React.Fragment key={extraId}>
                  <Separator />
                  <OverviewItem
                    selectedOption={{
                      id: extraId,
                      ...state.selectedExtras[extraId],
                    }}
                    onClick={() => {
                      dispatch({ type: 'removeExtra', payload: extraId });
                      dispatch({ type: 'setActiveStepIndex', payload: 2 });
                    }}
                  />
                </React.Fragment>
              ))}
          </OverviewWrapper>
          <Button
            onClick={() => {
              window.alert('Enjoy!');
              dispatch({ type: 'reset' });
            }}
          >
            Brew your coffee
          </Button>
        </>
      }
    />
  );
};

export default OverviewStep;
