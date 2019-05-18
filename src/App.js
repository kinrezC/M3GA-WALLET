import React from 'react';
import Web3Provider, { Connectors } from 'web3-react';
import MainApp from './components/MainApp';

const { InjectedConnector } = Connectors;

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 2, 3, 4] });

const connectors = { MetaMask };

const App = () => {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName={'ethers.js' | 'web3.js' | null}
    >
      <MainApp />
    </Web3Provider>
  );
};

export default App;
