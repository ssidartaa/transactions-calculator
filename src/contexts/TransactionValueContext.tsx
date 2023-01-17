import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import api from "../services/api";
import schema from "../validations/calculateTransactionValidation";

import {
  IHandleTransactionValuesProps,
  IProviderProps,
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

  const [values, setValues] = useState<IHandleTransactionValuesProps | null>(
    null
  );

  const handleTransactionValues = handleSubmit(
    (data: IHandleTransactionValuesProps) => {
      setValues({ ...data });
    }
  );

  const reciveTransactionValues = (data: IHandleTransactionValuesProps) => {
    api
      .post("", data)
      .then((res) => {
        console.log(res.data);
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (values) reciveTransactionValues(values);
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [values]);

  return (
    <TransactionValueContext.Provider
      value={{ register, handleTransactionValues, errors }}
    >
      {children}
    </TransactionValueContext.Provider>
  );
};

export default TransactionValueProvider;
