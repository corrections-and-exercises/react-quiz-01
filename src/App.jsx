import Counter from "./components/Counter";
import Notes from "./components/Notes";
import Header from "./components/Header";
import Topics from "./components/Topics";

import { topics as topicList } from "./services/data";

function App() {
  return (
    <div className="space-y-10 px-10">
      <h1 className="mt-4 text-center text-3xl font-bold text-blue-950">
        React Quiz 01
      </h1>
      <Header />
      <Header username="Karl" />
      <Topics topics={topicList} />
      <Counter />
      <Notes />
    </div>
  );
}

export default App;
