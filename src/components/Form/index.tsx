import Input from "../Input";
import { Container } from "./style";

const Form = () => {
  return (
    <Container>
      <Input title="Informe o valor da venda *" />
      <Input
        title="Em quantas parcelas *"
        description="Máximo de 12 parcelas"
      />
      <Input title="Informe o percentual de MDR *" />
    </Container>
  );
};

export default Form;
