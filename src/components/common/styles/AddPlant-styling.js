import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .addPlantCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
    padding: 20px 40px;
    cursor: pointer;

    img {
      width: 190px;
      border-radius: 4px;
    }

    .icon {
      margin: 35px 0;
    }

    div {
      font-size: 1.8rem;
      line-height: 27px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.08em;
    }
  }

  .addPlantCard:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
