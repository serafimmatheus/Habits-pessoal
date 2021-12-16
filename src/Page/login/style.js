import styled from "styled-components";

export const MainLogin = styled.main`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .teste {
        margin: 10px 0;
      }

      .options-login {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 15px 0;
      }

      .link {
        text-decoration: none;
        span {
          color: blue;
        }
      }
    }
  }
`;
