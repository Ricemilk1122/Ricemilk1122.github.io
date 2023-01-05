import '../less/global.less';

import React, { useState } from 'react';
import useSwitchTheme from './hooks/switchTheme';

const App = () => {
  const toggleTheme = useSwitchTheme();
  const [name] = useState('Hello Ricemilk');
  return <div onClick={toggleTheme}>{name}</div>;
};

export default App;
