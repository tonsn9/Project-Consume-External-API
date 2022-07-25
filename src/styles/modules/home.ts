import styled from "styled-components";
import {
  background,
  greenColor,
  primary,
  blueColor,
  text,
  btnBackgroundColor,
} from "../global/colors";

export const Container = styled.main`
  width: 100%;
  heigth: 100%;
  background: ${background};
  font-family: "Roboto", sans-serif;

  h1 {
    font-size: 1.25rem;
    color: ${text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    heigth: 100%;
    padding: 1rem;
  }

  > div {
    overflow-x: auto;
    table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      border: 1px solid #adbac7;
    }

    th,
    td {
      color: ${text};
      text-align: center;
      padding: 8px;
      border-bottom: 1px solid rgba(144 157 171 / 12%);
    }

    tr:nth-child(even) {
      background-color: ${background};
    }
  }

  h3 {
    font-size: 1rem;
    color: ${blueColor};
  }

  p {
    color: ${text};
    font-size: 0.75rem;
  }

  .btnEdit {
    margin: 1rem;
    padding: 0.25rem;
    width: 5rem;
    height: 2rem;
    border-radius: 4px;
    border: 1px solid #adbac7;
    background: ${btnBackgroundColor};
    color: ${text};
  }

  .btnEdit: hover {
    background: rgba(144 157 171 / 12%);
    border: 1px solid rgba(144 157 171 / 12%);
    transition-duration: 150ms;
  }
`;

export const Box = styled.main`
  width: 100%;
  heigth: 100%;
  background: ${background};
  font-family: "Roboto", sans-serif;

  form {
    font-size: 1.25rem;
    color: ${text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    heigth: 100%;
    padding: 1rem;
  }

  input {
    margin: 1rem;
    padding: 0.25rem;
    width: 50%;
    height: 2rem;
    border-radius: 4px;
    border: 1px solid #adbac7;
    background: ${btnBackgroundColor};
    color: ${text};
    text-align: center;
  }

  textarea {
    margin: 1rem;
    padding: 1rem;
    width: 50%;
    height: 2rem;
    border-radius: 4px;
    border: 1px solid #adbac7;
    background: ${btnBackgroundColor};
    color: ${text};
    text-align: center;
    justify-content: center;
  }

  .btnSalvar {
    margin: 1rem;
    padding: 0.25rem;
    width: 5rem;
    height: 2rem;
    border-radius: 4px;
    border: 1px solid #adbac7;
    background: ${btnBackgroundColor};
    color: ${text};
  }

  .btnsalvar: hover {
    background: rgba(144 157 171 / 12%);
    border: 1px solid rgba(144 157 171 / 12%);
    transition-duration: 150ms;
  }
`;
