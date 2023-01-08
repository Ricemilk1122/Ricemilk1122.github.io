import '../../../../less/global.less';

import React, { useState } from 'react';
import useSwitchTheme from '../../../hooks/switchTheme';

const Home = () => {
  const toggleTheme = useSwitchTheme();
  const [name] = useState('Ricemilk');
  return (
    <>
      <div onClick={toggleTheme}>{name}</div>
      <a href="article.html">Articles</a>
    </>
  );
};

export default Home;
