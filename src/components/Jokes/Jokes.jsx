import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";
import { Chuck, Joke } from "./Jokes.styled";
import chuck from "./chuck.png";
import { Container } from "../Categories/Categories.styled";

export default function Jokes({ category, logoImg, random }) {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    if (category !== "") {
      api.fetchJokesByCategory(category).then((resp) => {
        setJoke(resp.value);
      });
      return;
    }
    api.fetchRandomJokes().then((resp) => {
      setJoke(resp.value);
      logoImg(resp.icon_url);
    });
  }, [category, logoImg]);

  return (
    <Container>
      <Chuck image={chuck}> </Chuck>
      <Joke> {joke}</Joke>
    </Container>
  );
}
