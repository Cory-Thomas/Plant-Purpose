import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import * as yup from 'yup';
import { StyledForm } from './styles/AddPlantForm-styling';

export const AddPlantForm = ({ closeModal, plantUpdate, setPlantUpdate }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [values, setValues] = useState({
    nickname: '',
    species: '',
    h2o_frequency: '',
    image_url: '',
  });

  const [errors, setErrors] = useState({
    nickname: '',
    species: '',
    h2o_frequency: '',
    image_url: '',
  });

  const formSchema = yup.object().shape({
    nickname: yup.string().required(2, 'Plant name is a required field'),
    species: yup.string().required('Plant species is a required field'),
    h2o_frequency: yup
      .number()
      .required('Water Frequency is a required field, and must be a number'),
    image_url: yup.string(),
  });

  useEffect(() => {
    formSchema.isValid(values).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [values, formSchema]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('id');

    axiosWithAuth()
      .post(`/plants/user/${userId}`, values)
      .then(() => {
        setValues({
          nickname: '',
          species: '',
          h2o_frequency: '',
          image_url: '',
        });
      })
      .catch((err) => {
        console.log('AddPlants error: ', err);
      });

    closeModal();
    setPlantUpdate(plantUpdate + 1);
  };

  const inputChange = (e) => {
    e.persist();

    setValues({
      ...values,
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    });

    validateChange(e);
  };

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type='text'
        name='nickname'
        placeholder='Plant Name'
        values={values.nickname}
        onChange={inputChange}
      />

      <input
        type='text'
        name='species'
        placeholder='Plant Species'
        values={values.species}
        onChange={inputChange}
      />

      <input
        type='number'
        name='h2o_frequency'
        placeholder='Water Frequency Per Week   [NUMBER]'
        values={values.h2o_frequency}
        onChange={inputChange}
      />

      <input
        type='text'
        name='image_url'
        placeholder='Image URL Address'
        values={values.image_url}
        onChange={inputChange}
      />

      <button disabled={buttonDisabled}>Add plant!</button>
    </StyledForm>
  );
};
