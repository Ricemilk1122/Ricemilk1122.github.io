import '../../../../less/global.less';

import React, { useState } from 'react';
import useSwitchTheme from '../../../hooks/switchTheme';

const Article = () => {
  const toggleTheme = useSwitchTheme();
  const [name] = useState('Article');

  const params = new URLSearchParams(window.location.search);
  const articleNo = params.get('no');

  return (
    <>
      <div onClick={toggleTheme}>
        {name} {articleNo}
      </div>
      <a href="/">Back</a>
    </>
  );
};

export default Article;
