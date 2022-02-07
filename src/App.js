import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Jokes from "./components/Jokes/Jokes";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
function App() {
  const [category, setCategory] = useState("");
  const [logo, setLogo] = useState("");
  const [random, setRandom] = useState("");

  return (
    <div className="App">
      <GlobalStyles />
      <Header logo={logo} />
      <Categories changeCategory={setCategory} changeRandom={setRandom} />
      <Jokes category={category} random={random} logoImg={setLogo} />
    </div>
  );
}

export default App;
