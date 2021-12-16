import styled from "styled-components";

export const CardGroups = styled.li`
  @media screen and (min-width: 320px) {
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 200px;
      min-height: 250px;
      background-image: linear-gradient(180deg, #424242, #616161, #424242);
      margin: 10px;
      padding: 10px;
      color: #212121;

      :hover {
        transition: 0.5s;
        transform: scale(1.1);
        -webkit-box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
      }

      h2 {
        font-size: 22px;
      }
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 20px 0;
    }
  }
`;
