/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './mainStyles.scss';
// Props pas vraiment nécessaire mais habitude de rien mettre en 'dur'
function Main({
  data, crewTitle, crewSection, label, addCrewMate,
}) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedValue = value.trim();
    if (!parsedValue) {
      return;
    }
    addCrewMate(parsedValue);
    setValue('');
  };

  return (
    <main className="main">
      <h2>{crewTitle}</h2>
      <form
        className="main_form"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="main_form-label"
        >
          {label}

        </label>
        <input
          ref={inputRef}
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          aria-label="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
  addCrewMate: PropTypes.func.isRequired,
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
