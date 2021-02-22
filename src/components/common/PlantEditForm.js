import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { StyledForm } from './styles/PlantEditForm-styling';

export const PlantEditForm = ({ plant, showForm, setShowForm }) => {
  const [values, setValues] = useState({
    nickname: `${plant.nickname}`,
    species: `${plant.species}`,
    h2o_frequency: `${plant.h2o_frequency}`,
    image_url: `${plant.image_url}`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting ', values);
    const plantId = plant.id;
    console.log('Plant ID', plantId, plant);

    axiosWithAuth()
      .put(`/plants/${plantId}`, values)
      .then((res) => {
        console.log('Edit plants res: ', res);
        setValues({
          nickname: '',
          species: '',
          h2o_frequency: '',
          image_url: '',
        });
      })
      .catch((err) => {
        console.log('Edit plants error: ', err);
      });
  };

  const inputChange = (e) => {
    e.persist();

    setValues({
      ...values,
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type='text'
        name='nickname'
        placeholder={`Current Nickname: ${plant.nickname}`}
        values={values.nickname}
        value={values.nickname}
        onChange={inputChange}
      />

      <input
        type='text'
        name='species'
        placeholder={`Current Species: ${plant.species}`}
        values={values.species}
        value={values.species}
        onChange={inputChange}
      />

      <input
        type='number'
        name='h2o_frequency'
        placeholder={`Current Watering Frequency: ${plant.h2o_frequency}`}
        values={values.h2o_frequency}
        value={values.h2o_frequency}
        onChange={inputChange}
      />

      <input
        type='text'
        name='image_url'
        placeholder={`Current Image URL: ${plant.image_url}`}
        values={values.image_url}
        value={values.image_url}
        onChange={inputChange}
      />

      <button>Edit plant!</button>
      <button onClick={() => setShowForm(!showForm)}>Back to Plant Info</button>
    </StyledForm>
  );
};
