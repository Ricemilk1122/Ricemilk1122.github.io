import '../../../../less/global.less';

import React, { useState } from 'react';
import useSwitchTheme from '../../../hooks/switchTheme';
import { Link } from 'react-router-dom';

const Home = () => {
  const toggleTheme = useSwitchTheme();
  const [name] = useState('Ricemilk');
  return (
    <>
      <div onClick={toggleTheme}>{name}</div>
      <Link to="article">Articles</Link>
    </>
  );
};

export default Home;
