import React, { useEffect } from 'react';
import { useWeb3Context } from 'web3-react';

const MainApp = () => {
  const context = useWeb3Context();

  useEffect(() => {
    context.setFirstValidConnector(['MetaMask']);
  }, []);

  return <div>{'LETS FUCKING RIDE' + context.account}</div>;
};

export default MainApp;
