import Value from "../Value";
import { Container } from "./style";

const InfoAside = () => {
  return (
    <Container>
      <h2>VOCÊ RECEBERÁ:</h2>
      <ul>
        <Value info="Amanhã" value="0,00" />
        <Value info="Em 15 dias" value="0,00" />
        <Value info="Em 30 dias" value="0,00" />
        <Value info="Em 90 dias" value="0,00" />
      </ul>
    </Container>
  );
};

export default InfoAside;
