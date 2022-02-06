import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";

export default function Jokes({ category, logoImg }) {
  const [joke, setJoke] = useState("");
  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    if (!category === "") {
      api.fetchJokesByCategory(category).then((resp) => {
        setJoke(resp.value);
      });
    }
    api.fetchRandomJokes().then((resp) => {
      setRandomJoke(resp.value);
      logoImg(resp.icon_url);
    });
  }, [category, logoImg]);

  return (
    <div>
      <p>{joke || randomJoke}</p>
    </div>
  );
}
