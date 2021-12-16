import styled from "styled-components";

export const MainGroupsGoals = styled.main`
  @media screen and (min-width: 320px) {
    section {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style: none;

        li {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 200px;
          height: 250px;
          background-image: ${({ changeColorLi }) =>
            changeColorLi
              ? " linear-gradient(180deg, #1b5e20, #43a047, #1b5e20)"
              : " linear-gradient(180deg, #dd2c00, #ff6e40, #dd2c00)"};
          margin: 10px;
          padding: 10px;
          color: #212121;

          :hover {
            -webkit-box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
            /* ::before {
              display: block;
            } */
          }

          h2 {
            font-size: 22px;
          }

          /* ::before {
            content: "";
            position: absolute;
            width: 200px;
            height: 250px;
            background: #dd2c00;
            display: none;
          } */
        }
      }

      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 20px 0;
      }
    }
  }
`;
