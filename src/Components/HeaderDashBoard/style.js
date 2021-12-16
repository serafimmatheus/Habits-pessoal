import styled from "styled-components";

export const HeaderDash = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
    background-image: linear-gradient(45deg, #2e2e2e, #1f1e1e, #2e2e2e);
    color: white;

    h1 {
      font-size: 30px;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;

        li {
          margin: 0 10px;
          font-size: 18px;
          display: flex;
          align-items: center;

          p {
            margin: 0 2px;
          }
        }

        .link {
          color: white;
          text-decoration: none;

          :hover {
            text-decoration: underline;
          }
        }
      }
    }

    div {
      position: relative;
      display: ${(props) => (props.src ? "block" : "none")};
      input {
        width: 250px;
        height: 30px;
        position: relative;
        border: none;
        border-radius: 8px;
        padding: 8px;
      }

      button {
        position: absolute;
        height: 20px;
        top: 5px;
        right: 5px;
        border: none;
        padding: 0 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: green;
        cursor: pointer;

        :hover {
          background: white;
          color: green;
          border: 1px solid green;
        }
      }
    }
  }
`;
