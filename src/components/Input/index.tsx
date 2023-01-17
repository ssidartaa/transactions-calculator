import { Container } from "./style";
import { IInputProps } from "./interfaces";
import { forwardRef, LegacyRef } from "react";

const Input = forwardRef(
  (
    { label, description, id, error, ...rest }: IInputProps,
    ref: LegacyRef<HTMLInputElement>
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
