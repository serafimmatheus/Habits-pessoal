import styled from "styled-components";

export const MainGroups = styled.main`
  @media screen and (min-width: 320px) {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;

    div {
      display: flex;
      justify-content: center;

      p {
        margin: 20px;
        font-size: 20px;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      list-style: none;
    }

    div.buttons-sets {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      p {
        margin: 0 20px;
        font-size: 20px;
      }

      p:nth-of-type(2) {
        cursor: pointer;
      }
    }

    section {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
