import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";
import dark from "../../Assets/Dark.png";

export const MainLogin = styled.main`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${dark});
    overflow: hidden;
  }
`;

export const BoxApresentationForm = styled.div`
  @media screen and (min-width: 320px) {
    border: 1px solid #e6e9fa;
    box-shadow: 0px 48px 48px -6px #17328e;
    filter: drop-shadow(0px 0px 1px #17328e);
    border-radius: 24px;

    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const W50 = styled.div`
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

export const Form = styled.div`
  @media screen and (min-width: 320px) {
    h2 {
      text-align: center;
      color: white;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;

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
          color: white;
        }
      }
    }
  }
`;

export const CssTextField = styled(TextField)({
  "&:placeholder fieldset": {
    borderColor: "white",
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3949AB",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#1f38d1",
    },
  },
});
