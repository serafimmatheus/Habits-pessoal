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

          div{
            border-radius: 100%;
            button{
              display: flex;
              justify-content: center;
              align-items:center; 
              width: 40px;
              height: 40px;
              cursor: pointer;
              font-size: 30px;
              border-radius: 100%;
              border: none;
              margin: 0 5px;
            }
          }
        }
      }
  }
`;
