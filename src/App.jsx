import '../less/global.less';

import React from 'react';
import { useState } from 'react';

const App = () => {
  const [name] = useState('Hello Ricemilk');
  return <div>{name}</div>;
};

export default App;
