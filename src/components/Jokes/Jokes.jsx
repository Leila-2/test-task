import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";

export default function Jokes({ category }) {
  const [joke, setJoke] = useState("");
  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    if (category === "") {
      api.fetchRandomJokes().then((resp) => {
        // console.log("random", resp);
        //const randomIndex = Math.floor(Math.random() * resp.length);
        setRandomJoke(resp.value);
      });
    }
    api.fetchJokesByCategory(category).then((resp) => {
      //console.log("joke", resp.json);
      setJoke(resp.value);
    });
  });
  return (
    <div>
      <p>{joke ? joke : randomJoke}</p>
    </div>
  );
}
