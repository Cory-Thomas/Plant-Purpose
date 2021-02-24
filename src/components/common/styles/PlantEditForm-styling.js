import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: var(--background);
  padding: 20px 30px;
  border-radius: 5px;
  box-sizing: border-box;

  svg {
    width: 35px;
    margin: 5px 10px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    margin: 10px;
    padding: 15px 10px;
  }

  button {
    width: 100%;
    padding: 15px;
    margin: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: 20px;

    .delete {
      width: 140px;
      padding: 10px;
      background-color: #ff0033;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 13px;
    }
  }
`;
