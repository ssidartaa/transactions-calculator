import styled from "styled-components";

export const Container = styled.aside`
  padding: 25px 20px 40px;
  background-color: rgba(209, 220, 227, 0.18);

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-top: 83px;
  }

  h2 {
    color: var(--Color-4);
    font-size: 1rem;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(93, 156, 236, 0.3);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
