import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  section {
    box-sizing: border-box;

    input {
      width: 100%;
      margin: 10px 0;
      padding: 15px 10px;
    }
  }
  input,
  input:before,
  input:after {
    box-sizing: inherit;
  }

  button {
    width: 100%;
    padding: 15px;
    margin: 20px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
