import styled from "styled-components";

export const LiHabits = styled.li`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 250px;
    background-image: linear-gradient(180deg, #1b5e20, #43a047, #1b5e20);
    margin: 10px;
    padding: 10px;
    color: #212121;
    position: relative;
    ::before {
      content: "Concluido";
      position: absolute;
      padding: 5px;
      top: -25px;
      right: -25px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      word-break: break-all;
      text-align: center;
      border-radius: 100%;
      border: 1px solid black;
      background: white;
    }

    :hover {
      -webkit-box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.75);
    }

    h2 {
      font-size: 22px;
    }

    div {
      border-radius: 100%;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
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
`;

export const BarsProgress = styled.span`
  @media screen and (min-width: 320px) {
    display: flex;
    width: 150px;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    position: relative;

    span {
      display: flex;
      position: absolute;
      width: ${(props) => props.progress + "%"};
      height: 20px;
      border-radius: 10px;
      background-color: #1b5e20;
      p {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        color: white;
      }
    }
  }
`;
