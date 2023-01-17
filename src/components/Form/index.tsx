import { useContext } from "react";

import Input from "../Input";

import { TransactionValueContext } from "../../contexts/TransactionValueContext";

import { Container } from "./style";

const Form = () => {
  const { errors, register, handleTransactionValues } = useContext(
    TransactionValueContext
  );

  return (
    <Container onChange={handleTransactionValues}>
      <Input
        label="Informe o valor da venda *"
        id="value"
        error={errors.amount?.message}
        {...register("amount")}
      />

      <Input
        label="Em quantas parcelas *"
        id="installments"
        error={errors.installments?.message}
        {...register("installments")}
      />

      <Input
        label="Informe o percentual de MDR *"
        id="mdr"
        error={errors.mdr?.message}
        {...register("mdr")}
      />
    </Container>
  );
};

export default Form;
