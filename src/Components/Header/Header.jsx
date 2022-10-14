import React from 'react';
import PropTypes from 'prop-types';

import './headerStyles.scss';

function Header({ title }) {
  return (
    <header>
      <h1>
        <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
        {title}
      </h1>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Les Argonautes',
};

export default React.memo(Header);
