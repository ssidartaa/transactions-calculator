import { Container } from "./style";

const Value = ({ info, value }: { info: string; value: string }) => {
  return (
    <Container>
      <i>
        {`${info}: `}
        <b>{`R$ ${value}`}</b>
      </i>
    </Container>
  );
};

export default Value;
