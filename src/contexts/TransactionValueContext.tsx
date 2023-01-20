import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import api from "../services/api";
import schema from "../validations/calculateTransactionValidation";

import {
  IHandleTransactionValuesProps,
  IProviderProps,
  IResultValues,
  ITransactionValueValues,
} from "./interfaces";

export const TransactionValueContext = createContext<ITransactionValueValues>(
  {} as ITransactionValueValues
);

const TransactionValueProvider = ({ children }: IProviderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHandleTransactionValuesProps>({
    mode: "onChange",
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  // Variável para guardar os valores escritos nos inputs
  const [values, setValues] = useState<IHandleTransactionValuesProps | null>(
    null
  );

  // Variável para guardar o resultado da requisição para a API
  const [result, setResult] = useState<IResultValues>({} as IResultValues);

  // Função utilizada para guardar os valores escritos nos inputs para a variável values
  const handleTransactionValues = handleSubmit(
    (data: IHandleTransactionValuesProps) => {
      setValues({ ...data });
    }
  );

  // Função utilizada para efetuar a requisição e atribuir o res à variável result
  const reciveTransactionValues = (data: IHandleTransactionValuesProps) => {
    api
      .post<IResultValues>("", data)
      .then((res) => {
        setResult({ ...res.data });
        toast.success("Transação calculada!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ocorreu um erro.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  // UseEffect usado para não ocorrer requisições a toda hora, ou duplicação de requisição
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (values) reciveTransactionValues(values);
    }, 700);

    // Caso aconteça a desconstrução vai ser zerado o timeout e reiniciar o processo até que não haja alterações no código
    return () => {
      clearTimeout(timeout);
    };
  }, [values]);

  return (
    <TransactionValueContext.Provider
      value={{ register, handleTransactionValues, errors, result }}
    >
      {children}
    </TransactionValueContext.Provider>
  );
};

export default TransactionValueProvider;
