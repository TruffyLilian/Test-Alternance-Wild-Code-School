/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from '../../Components/Main/Main';

// Props pas vraiment nécessaire mais habitude de rien mettre en 'dur'
function MainContainer() {
  const [crewData, setCrewData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3002/crew');
    setCrewData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addCrewMate = async (newCrewMate) => {
    await axios.post('http://localhost:3002/crew', {
      id: crewData.length + 1,
      name: newCrewMate,
    });
    setCrewData([...crewData, { id: crewData.length + 1, name: newCrewMate }]);
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
