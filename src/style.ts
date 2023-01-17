import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Color-1);
  border: 2px solid var(--Color-3);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 377px;

  @media screen and (min-width: 768px) {
    max-width: 608px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }

  main {
    padding: 40px 20px 10px;

    @media screen and (min-width: 768px) {
      padding: 40px 70px 30px;
    }

    h1 {
      font-size: 1.3rem;
      color: var(--Color-2);
      margin-bottom: 20px;

      @media screen and (min-width: 768px) {
        font-size: 1.3rem;
        width: 100%;
        white-space: nowrap;
      }
    }
  }
`;
