/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from '../../Components/Main/Main';

// Props pas vraiment nécessaire mais habitude de rien mettre en 'dur'
function MainContainer() {
  const [crewData, setCrewData] = useState([]);

  // Permet de faire une requete GET pour recuperer tout les membres
  const fetchData = async () => {
    const response = await axios.get('http://localhost:3002/crew');
    setCrewData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Permet de faire une requete POST pour ajouter un nouveau membre
  const addCrewMate = async (newCrewMate) => {
    await axios.post('http://localhost:3002/crew', {
      id: crewData.length + 1,
      name: newCrewMate,
    });
    setCrewData([...crewData, { id: crewData.length + 1, name: newCrewMate }]);
    // On refait une requete GET un fois une personne ajouter pour pouvoir avoir nos personne rangées
    // par ordre Alphabétique
    fetchData();
  };

  return (
    <Main
      data={crewData}
      handleClick={addCrewMate}
      addCrewMate={addCrewMate}
    />
  );
}

export default React.memo(MainContainer);
