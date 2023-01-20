import React from 'react';
import styled from 'styled-components';

import { Step } from '../shared/Step';
import { ReactComponent as CoffeeMachineSvg } from '../images/coffee-machine.svg';
import { ReactComponent as MobilePhoneSvg } from '../images/mobile-phone.svg';

const Illustration = styled.div`
  position: relative;
  margin-top: 80px;
  margin-bottom: 32px;
`;

const CoffeeMachine = styled(CoffeeMachineSvg)`
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

const HowItWorksBtn = styled.button`
  display: inline-block;
  padding: 0 16px;
  line-height: initial;
  color: ${({ theme }) => theme.color.textDark};
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;

const InitialStep: React.FC = () => {
  // @TODO
  // implement how it works modal
  //
  // const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);
  // const onHowItWorksBtnClick = useCallback(() => {
  //   setIsHowItWorksOpen(true);
  // }, []);

  return (
    <Step subtitle="Dark Roasted Beans" title="Tab the machine to start">
      <Illustration>
        <CoffeeMachine />
        <MobilePhone />
      </Illustration>
      <HowItWorksBtn type="button">How does this work?</HowItWorksBtn>
    </Step>
  );
};

export default InitialStep;
