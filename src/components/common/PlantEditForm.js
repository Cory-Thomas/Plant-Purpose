import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editPlant, deletePlant } from '../../store/actions/plantActions';
import { StyledForm } from './styles/PlantEditForm-styling';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

const PlantEditForm = ({
  plant,
  showForm,
  setShowForm,
  closeModal,
  editPlant,
  deletePlant,
}) => {
  const [values, setValues] = useState({
    nickname: `${plant.nickname}`,
    species: `${plant.species}`,
    image_url: `${plant.image_url}`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const plantId = plant.id;

    editPlant(values, plantId);

    setValues({
      nickname: '',
      species: '',
      image_url: '',
    });

    closeModal();
  };

  const handleDelete = (e) => {
    const plantId = plant.id;
    e.preventDefault();
    deletePlant(plantId);

    setValues({
      nickname: '',
      species: '',
      image_url: '',
    });
    closeModal();
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
      <ArrowBack onClick={() => setShowForm(2)} />

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
        type='text'
        name='image_url'
        placeholder={`Current Image URL: ${plant.image_url}`}
        values={values.image_url}
        value={values.image_url}
        onChange={inputChange}
      />

      <div>
        <button className='edit'>Edit Plant!</button>
        <button className='delete' onClick={handleDelete}>
          Delete Plant!
        </button>
      </div>
    </StyledForm>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { editPlant, deletePlant })(
  PlantEditForm
);
