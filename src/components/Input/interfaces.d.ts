import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  id: string;
  error?: string;
}

interface IContainerProps {
  error?: string;
}
