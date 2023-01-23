import React from 'react';

import { useWizard } from './hooks/useWizard';

const App: React.FC = () => {
  const Wizard = useWizard();
  return <main>{Wizard}</main>;
};

export default App;
