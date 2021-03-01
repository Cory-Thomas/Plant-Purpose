import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  padding: 10px;

  .userInfo {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    padding-top: 15px;
    font-size: 1.8rem;
    border-bottom: 3px solid var(--background);
    margin-bottom: 11px;
    min-width: 220px;

    .icon {
      width: 65px;
      margin: 0 auto;
    }

    h3 {
      margin: 15px 0;
      font-size: 1.8rem;
      line-height: 27px;
      letter-spacing: 0.08em;
    }
  }

  section div {
    padding: 13px;
    line-height: 18px;
    letter-spacing: 0.08em;

    .icon {
      margin-right: 15px;
    }
  }
  .notesItem {
    border-bottom: 3px solid var(--background);
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
`;
