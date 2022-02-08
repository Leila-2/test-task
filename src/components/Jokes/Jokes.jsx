import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";
import { Chuck, Joke } from "./Jokes.styled";
import chuck from "./chuck.png";

export default function Jokes({ category, logoImg, random }) {
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
      <Chuck image={chuck}> </Chuck>
      <Joke> {randomJoke || random || joke}</Joke>
    </div>
  );
}
