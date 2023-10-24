import {Header} from "./components/Header/Header";
import {CoreConceptList} from "./components/CoreConcept/CoreConceptList";
import {ExampleList} from "./components/Example/ExampleList";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptList />
        <ExampleList />
      </main>
    </>
  );
}

export default App;
