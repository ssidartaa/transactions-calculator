import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Color-2);

  div {
    display: flex;
    flex-direction: column;

    p {
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
  }

  span {
    font-size: 0.6rem;
    margin-top: 5px;
    color: #cecece;
  }
`;
