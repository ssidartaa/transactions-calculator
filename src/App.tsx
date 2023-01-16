import { Container } from "./style";
import Form from "./components/Form/";
import InfoAside from "./components/InfoAside";

const App = () => {
  return (
    <>
      <Container>
        <h1>Simule sua Antecipação</h1>
        <Form />
      </Container>
      <InfoAside />
    </>
  );
};

export default App;
