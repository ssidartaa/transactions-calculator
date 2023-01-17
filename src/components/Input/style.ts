import styled, { css } from "styled-components";

import { IContainerProps } from "./interfaces";

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  color: var(--Color-2);

  ${({ error }) => {
    return error
      ? css`
          div {
            label {
              color: red;
            }

            input {
              border-color: red;

              :focus {
                border-color: red;
              }
            }
          }
        `
      : css`
          span {
            opacity: 0;
          }
        `;
  }}

  div {
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.8rem;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid #dde6e9;
      border-radius: 4px;
      height: 37px;
      padding: 0 9px;

      :focus {
        border-color: #66afe9;
      }
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }

  span {
    font-size: 0.6rem;
    margin-top: 5px;
    color: #cecece;
  }
`;
