import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Item from './components/Item';
import Splash from './components/Splash';

const itemList = [
  { icon: "icon1", back: "itemback1", title: "Pylon", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: "icon2", back: "itemback2", title: "Solarite", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: "icon3", back: "itemback3", title: "Kassia Home", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: "icon4", back: "itemback4", title: "Kassia Hotel", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { icon: "icon5", back: "itemback5", title: "Kassia Commercial", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
]

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <AppContainer>
      {!loading && <PaneBox>
        {itemList.map((item, index) => <Item key={`item-${index}`} item={item} />)}
      </PaneBox>}
      <Splash />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  /* width: 100vw; */
  /* height: 100%; */
  background: url(${require('./assets/background.jpg')});
  background-size: cover;
`;

const PaneBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;