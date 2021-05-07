import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media (${QUERIES.mobileMax}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default App;
