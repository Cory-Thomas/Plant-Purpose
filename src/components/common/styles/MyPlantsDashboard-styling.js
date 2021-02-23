import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    h2 {
      margin: 0;
      font-size: 1.8rem;
      line-height: 27px;
      letter-spacing: 0.08em;
    }

    a {
      display: flex;

      span {
        margin: auto;
      }

      svg {
        width: 25px;
      }
    }
  }

  .plantGallery {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .noPlants {
      width: 100%;
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.4rem;
      background-color: var(--background);
    }

    div {
      padding: 10px 0;

      img,
      svg {
        width: 215px;
        height: 240px;
        border-radius: 4px;
        background-color: var(--background);
      }

      h3 {
        margin: 10px 0;
        font-size: 1.8rem;
        line-height: 27px;
        display: flex;
        align-items: center;
        letter-spacing: 0.08em;
        color: var(--font-secondary);
      }
    }
  }
`;
