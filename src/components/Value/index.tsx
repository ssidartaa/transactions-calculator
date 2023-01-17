import { Container } from "./style";

const Value = ({ info, value }: ITransactionValueProps) => {
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
