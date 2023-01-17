import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input";

import { TransactionValueContext } from "../../contexts/TransactionValueContext";
import schema from "../../validations/calculateTransactionValidation";

import { IHandleTransactionValuesProps } from "../../contexts/interfaces";

import { Container } from "./style";

const Form = () => {
  const { handleTransactionValues } = useContext(TransactionValueContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHandleTransactionValuesProps>({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const a = (data: any) => {
    console.log(data);
  };

  return (
    <Container onChange={handleSubmit(a)}>
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
