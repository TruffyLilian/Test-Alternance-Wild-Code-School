/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from '../../Components/Main/Main';

// Props pas vraiment nécessaire mais habitude de rien mettre en 'dur'
function MainContainer() {
  const [crewData, setCrewData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3002/crew');
      setCrewData(response.data);
    };
    fetchData();
  }, []);
  console.log(crewData);

  const addCrewMate = async (newCrewMate) => {
    await axios.post('http://localhost:3002/crew', {
      id: crewData.length + 1,
      name: newCrewMate,
    });
    setCrewData([...crewData, { id: crewData.length + 1, name: newCrewMate }]);
  };

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
    <Main
      data={crewData}
      handleClick={addCrewMate}
      onChange={(e) => setValue(e.target.value)}
      onSubmit={(e) => handleSubmit(e)}
      value={value}
    />
  );
}

export default React.memo(MainContainer);
