import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { StyledForm } from './styles/AddPlantForm-styling';

const AddPlantForm = ({ closeModal, plantUpdate, setPlantUpdate, id }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [values, setValues] = useState({
    nickname: '',
    species: '',
    image_url: '',
  });

  const [errors, setErrors] = useState({
    nickname: '',
    species: '',
    image_url: '',
  });

  const formSchema = yup.object().shape({
    nickname: yup.string().required(2, 'Plant name is a required field'),
    species: yup.string().required('Plant species is a required field'),
    image_url: yup.string(),
  });

  useEffect(() => {
    formSchema.isValid(values).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [values, formSchema]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = id;

    axiosWithAuth()
      .post(`/plants/user/${userId}`, values)
      .then(() => {
        setValues({
          nickname: '',
          species: '',
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

const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};

export default connect(mapStateToProps, {})(AddPlantForm);
