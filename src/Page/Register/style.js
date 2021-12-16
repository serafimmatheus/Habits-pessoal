import styled from "styled-components";

export const MainRegister = styled.main`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    form {
      width: 300px;

      .options-register {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
