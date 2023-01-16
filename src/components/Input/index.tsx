import { Container } from "./style";

const Input = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <>
      <Container>
        <span>{title}</span>
        <input type="text" />
      </Container>
      {description && <span className="description">{description}</span>}
    </>
  );
};

export default Input;
