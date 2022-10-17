/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './mainStyles.scss';
// Props { crewTitle, crewSection, label } pas vraiment nécessaire mais habitude de rien mettre en 'dur'
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
  // On récupere l'event du submit on trim la value pour voir si on a entré un text et on enleve les espace
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedValue = value.trim();
    if (!parsedValue) {
      return;
    }
    // on appele la fonction addCrewMate du mainContainer qui va s'occuper de gerer les logique
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
