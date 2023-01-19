import { BaseSyntheticEvent, ReactNode } from "react";
import { FieldErrorsImpl } from "react-hook-form";

interface IProviderProps {
  children: ReactNode;
}

interface IHandleTransactionValuesProps {
  amount: string;
  installments: string;
  mdr: string;
  days?: string;
}

interface IResultValues {
  1: number;
  15: number;
  30: number;
  90: number;
}

interface ITransactionValueValues {
  register: UseFormRegister<IHandleTransactionValuesProps>;
  handleTransactionValues: (e: BaseSyntheticEvent) => Promise<void>;
  errors: Partial<FieldErrorsImpl<IHandleTransactionValuesProps>>;
  result: IResultValues;
}
