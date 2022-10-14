import React from 'react';
import PropTypes from 'prop-types';

import './footerStyles.scss';

function Footer({ text }) {
  return (
    <footer>
      <p>
        {text}
      </p>
    </footer>
  );
}
Footer.propTypes = {
  text: PropTypes.string,
};

Footer.defaultProps = {
  text: "Réalisé par Jason en Anthestérion de l'an 515 avant JC",
};

export default React.memo(Footer);
