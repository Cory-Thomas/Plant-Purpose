import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  padding: 10px;

  .userInfo {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    padding-top: 15px;
    font-size: 1.8rem;
    border-bottom: 3px solid var(--background);

    h3 {
      margin: 15px 0;
    }
  }

  section div {
    padding: 12px;

    .icon {
      margin-right: 5px;
    }
  }
  .notesItem {
    border-bottom: 3px solid var(--background);
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`;
