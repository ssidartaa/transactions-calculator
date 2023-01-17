import { Container } from "./style";

const Input = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <Container>
      <div>
        <p>{title}</p>
        <input type="text" />
      </div>
      {description && <span className="description">{description}</span>}
    </Container>
  );
};

export default Input;
