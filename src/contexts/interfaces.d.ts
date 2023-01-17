import { ReactNode } from "react";

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
  handleTransactionValues: (values: IHandleTransactionValuesProps) => void;
}
