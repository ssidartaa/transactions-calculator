import { Container } from "./style";
import Form from "./components/Form/";
import InfoAside from "./components/InfoAside";

const App = () => {
  return (
    <Container>
      <main>
        <h1>Simule sua Antecipação</h1>
        <Form />
      </main>
      <InfoAside />
    </Container>
  );
};

export default App;
