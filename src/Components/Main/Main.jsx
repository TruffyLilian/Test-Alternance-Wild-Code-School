/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './mainStyles.scss';
// Props pas vraiment nécessaire mais habitude de rien mettre en 'dur'
function Main({
  data, crewTitle, crewSection, label,
}) {
  return (
    <main>

      <h2>{crewTitle}</h2>
      <form className="new-member-form">
        <label htmlFor="name">{label}</label>
        <input id="name" name="name" type="text" placeholder="Charalampos" aria-label="name" />
        <button type="submit">Envoyer</button>
      </form>

      <h2>{crewSection}</h2>
      <section className="member-list">
        {data.map(({ name, id }) => (

          <div key={id} className="member-item">{name}</div>
        ))}

      </section>
    </main>
  );
}
Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    created_at: PropTypes.string,
  })).isRequired,
  crewTitle: PropTypes.string,
  crewSection: PropTypes.string,
  label: PropTypes.string,
};

Main.defaultProps = {
  crewTitle: 'Ajouter un(e) Argonaute',
  crewSection: "Membres de l'équipage",
  label: "Nom de l'Argonaute",
};

export default React.memo(Main);
// aze
