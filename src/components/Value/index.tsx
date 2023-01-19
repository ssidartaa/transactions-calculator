import { Container } from "./style";

const Value = ({ info, value }: ITransactionValueProps) => {
  const formatedValue = value
    ? value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : "0,00";
  return (
    <Container>
      <i>
        {`${info}: `}
        <b>{formatedValue}</b>
      </i>
    </Container>
  );
};

export default Value;
