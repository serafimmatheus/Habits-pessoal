import styled from "styled-components";
import { keyframes } from "styled-components";

const teste = keyframes` 
  0%{
    opacity: 0;
  }

  100%{
    opacity: 100%;

  }
`;

export const teste2 = keyframes` 
  0%{
    transform: translateY(-150px);
  }

  100%{
    transform: translateY(0);
  }
`;

export const ModalGroupsDiv = styled.div`
  @media screen and (min-width: 320px) {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100vh;
    z-index: 2;
    display: ${({ isModalGroup }) => (isModalGroup ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    animation: ${teste} 1s linear;

    form {
      background: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      width: 320px;
      animation: ${teste2} 1s linear;

      div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        h2 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
