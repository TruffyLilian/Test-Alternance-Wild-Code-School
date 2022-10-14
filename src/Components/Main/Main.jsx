/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './mainStyles.scss';
// Props pas vraiment nécessaire mais habitude de rien mettre en 'dur'
function Main({
  data, crewTitle, crewSection, label, onSubmit, onChange, value,
}) {
  return (
    <main className="main">
      <h2>{crewTitle}</h2>
      <form
        className="main_form"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="name"
          className="main_form-label"
        >
          {label}

        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          aria-label="name"
          value={value}
          onChange={onChange}
        />
        <button type="submit">Envoyer</button>
      </form>

      <h2>{crewSection}</h2>
      <section
        className="main_member-list"
      >
        {data.map(({ name, id }) => (
          <div
            key={id}
            className="main_member-list--item"
          >
            {name}

          </div>
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
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  crewTitle: PropTypes.string,
  crewSection: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Main.defaultProps = {
  crewTitle: 'Ajouter un(e) Argonaute',
  crewSection: "Membres de l'équipage",
  label: "Nom de l'Argonaute",
};

export default React.memo(Main);
// aze
