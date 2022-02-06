import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";

export default function Jokes({ category }) {
  // const [joke, setJoke] = useState("");
  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    if (category === "") {
      api.fetchRandomJokes().then((resp) => {
        setRandomJoke(resp.value);
      });
    }
    // api.fetchJokesByCategory(category).then((resp) => {
    //   setJoke(resp.value);
    // });
  }, [category]);

  return (
    <div>
      <p>{randomJoke}</p>
    </div>
  );
}
