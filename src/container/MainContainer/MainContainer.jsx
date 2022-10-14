/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from '../../Components/Main/Main';

// Props pas vraiment nécessaire mais habitude de rien mettre en 'dur'
function MainContainer() {
  const [crewData, setCrewData] = useState([]);

  const getCrewData = async () => {
    const response = await axios.get('http://localhost:3002');
    console.log(response);
    setCrewData(response.data);
  };

  useEffect(() => {
    getCrewData();
  }, []);

  return (
    <Main data={crewData} />
  );
}

export default React.memo(MainContainer);
