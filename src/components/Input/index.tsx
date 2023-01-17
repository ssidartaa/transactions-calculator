import { Container } from "./style";
import { IInputProps } from "./interfaces";
import { forwardRef, ForwardedRef } from "react";

const Input = forwardRef(
  (
    { label, description, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Container error={error}>
        <div>
          <label htmlFor={id}>{label}</label>
          <input type="number" id={id} ref={ref} {...rest} />
        </div>
        <span>{error ? error : "a"}</span>
      </Container>
    );
  }
);

export default Input;
