import { useContext } from "react";
import { TransactionValueContext } from "../../contexts/TransactionValueContext";
import Value from "../Value";
import { Container } from "./style";

const InfoAside = () => {
  const { result } = useContext(TransactionValueContext);

  return (
    <Container>
      <h2>VOCÊ RECEBERÁ:</h2>
      <ul>
        <Value info="Amanhã" value={result[1]} />
        <Value info="Em 15 dias" value={result[15]} />
        <Value info="Em 30 dias" value={result[30]} />
        <Value info="Em 90 dias" value={result[90]} />
      </ul>
    </Container>
  );
};

export default InfoAside;
