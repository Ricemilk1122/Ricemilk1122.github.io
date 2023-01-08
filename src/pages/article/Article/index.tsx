import '../../../../less/global.less';

import React, { useState } from 'react';
import useSwitchTheme from '../../../hooks/switchTheme';
import { Link } from 'react-router-dom';

const Article = () => {
  const toggleTheme = useSwitchTheme();
  const [name] = useState('Article');

  return (
    <>
      <div onClick={toggleTheme}>{name}</div>
      <Link to="/">Back</Link>
    </>
  );
};

export default Article;
