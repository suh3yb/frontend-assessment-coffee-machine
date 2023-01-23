import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Layout } from './shared/Layout';
import { ReactComponent as CoffeeMachineSvg } from './images/coffee-machine.svg';
import { ReactComponent as MobilePhoneSvg } from './images/mobile-phone.svg';

const easein = keyframes`
  30% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(0) scale(1);
  }

  90{
    transform: translateX(40px) scale(1.05);
  }
`;

const Illustration = styled.div`
  position: relative;
  margin-top: 60px;
  margin-bottom: 32px;
  /* to compansate svg being cut */
  padding-top: 20px;
  overflow: hidden;
`;

const CoffeeMachine = styled(CoffeeMachineSvg)`
  height: 400px;
  color: ${({ theme }) => theme.color.buttonBgLight};
`;

const MobilePhone = styled(MobilePhoneSvg)`
  position: absolute;
  top: 20px;
  right: 0;
  height: 267px;
  transform: translateX(40px) scale(1.05);
  animation: ${easein} 6s 2s infinite;
`;

const HowItWorksBtn = styled.button`
  display: inline-block;
  padding: 0 16px;
  line-height: initial;
  color: ${({ theme }) => theme.color.textDark};
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;

const Landing: React.FC = () => {
  // @TODO
  // implement how it works modal
  //
  // const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);
  // const onHowItWorksBtnClick = useCallback(() => {
  //   setIsHowItWorksOpen(true);
  // }, []);

  return (
    <Layout subtitle="Dark Roasted Beans" title="Tab the machine to start">
      <Illustration>
        <CoffeeMachine />
        <MobilePhone />
      </Illustration>
      <HowItWorksBtn type="button">How does this work?</HowItWorksBtn>
    </Layout>
  );
};

export default Landing;
