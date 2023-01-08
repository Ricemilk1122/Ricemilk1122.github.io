import '../../../../less/global.less';

import React, { useState } from 'react';
import useSwitchTheme from '../../../hooks/switchTheme';

const Article = () => {
  const toggleTheme = useSwitchTheme();
  const [name] = useState('Article Page');
  return (
    <>
      <div onClick={toggleTheme}>{name}</div>
      <a href="/">Back</a>
    </>
  );
};

export default Article;
