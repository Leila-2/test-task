import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Jokes from "./components/Jokes/Jokes";
function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Header />
      <Categories changeCategory={setCategory} />
      <Jokes category={category} />
    </div>
  );
}

export default App;
