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

interface ITransactionValueValues {
  register: UseFormRegister<IHandleTransactionValuesProps>;
  handleTransactionValues: (e: BaseSyntheticEvent) => Promise<void>;
  errors: Partial<FieldErrorsImpl<IHandleTransactionValuesProps>>;
}
