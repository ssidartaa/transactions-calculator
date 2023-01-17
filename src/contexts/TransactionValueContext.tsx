import { createContext, useEffect } from "react";
import api from "../services/api";
import {
  IHandleTransactionValuesProps,
  IProviderProps,
  ITransactionValueValues,
} from "./interfaces";

export const TransactionValueContext = createContext<ITransactionValueValues>(
  {} as ITransactionValueValues
);

const TransactionValueProvider = ({ children }: IProviderProps) => {
  const handleTransactionValues = async (
    values: IHandleTransactionValuesProps
  ) => {
    return await api.post("", values).then((res) => res);
  };

  return (
    <TransactionValueContext.Provider value={{ handleTransactionValues }}>
      {children}
    </TransactionValueContext.Provider>
  );
};

export default TransactionValueProvider;
