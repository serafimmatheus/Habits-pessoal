import styled from "styled-components";

export const MainHabits = styled.main`
  @media screen and (min-width: 320px) {
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        text-align: center;
        padding: 20px 0;
        margin: 0 20px;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        }
      }
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style: none;
      }
  }
`;
