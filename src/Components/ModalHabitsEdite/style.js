import styled from "styled-components";

export const ModalHabitsEditeDiv = styled.div`
  @media screen and (min-width: 320px) {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100vh;
    z-index: 2;
    display: ${({ isModalHabitsEdite }) =>
      isModalHabitsEdite ? "flex" : "none"};
    justify-content: center;
    align-items: center;

    form {
      background: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      width: 320px;

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
