import styled from "styled-components";

export const MainRegister = styled.main`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3949ab;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      form {
        h2 {
          color: white;
          text-align: center;
        }
        width: 300px;

        .options-register {
          display: flex;
          justify-content: space-between;
          margin: 0 0 20px 0;

          .link {
            text-decoration: none;
            span {
              color: white;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    div {
      width: auto;
      flex-direction: row;

      form {
        padding: 20px;
        width: 50%;
      }
    }

    > div {
      border: 1px solid #e6e9fa;
      box-shadow: 0px 48px 48px -6px #17328e;
      filter: drop-shadow(0px 0px 1px #17328e);
      border-radius: 24px;
    }
  }
`;

export const BoxImgRegister = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
