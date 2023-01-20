import React from 'react';
import styled from 'styled-components';

import { Step } from '../shared/Step';
import { ReactComponent as CoffeeMachineSvg } from '../images/coffee-machine.svg';
import { ReactComponent as MobilePhoneSvg } from '../images/mobile-phone.svg';

const Illustration = styled.div`
  position: relative;
  margin-top: 80px;
`;

const CoffeeMachine = styled(CoffeeMachineSvg)`
  position: absolute;
  top: 0;
  left: 0;
  height: 400px;
  color: ${({ theme }) => theme.color.buttonBgLight};
`;

const MobilePhone = styled(MobilePhoneSvg)`
  position: absolute;
  top: 0;
  right: 0;
  height: 267px;
  transform: translateX(16px) scale(1.05);
`;
/**
 * @TODO
 * add animation
 */

const InitialStep: React.FC = () => {
  return (
    <Step subtitle="Dark Roasted Beans" title="Tab the machine to start">
      <Illustration>
        <CoffeeMachine />
        <MobilePhone />
      </Illustration>
    </Step>
  );
};

export default InitialStep;
