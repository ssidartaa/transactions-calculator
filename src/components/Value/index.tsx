import { Container } from "./style";

const Value = ({ info, value }: { info: string; value: string }) => {
  return (
    <Container>
      <p>
        {`${info}: `}
        <span>{`R$ ${value}`}</span>
      </p>
    </Container>
  );
};

export default Value;
