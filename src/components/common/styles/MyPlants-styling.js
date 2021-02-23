import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  padding: 20px;

  .plantGallery {
    display: flex;
    flex-wrap: wrap;

    .noPlants {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.4rem;
    }

    div {
      width: 270px;
      height: 300px;
      background-color: var(--background);
      margin: 15px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      img {
        box-sizing: border-box;
        width: 260px;
        height: 250px;
        padding: 10px 8px;
        border-radius: 12px;
      }
    }
  }
`;
