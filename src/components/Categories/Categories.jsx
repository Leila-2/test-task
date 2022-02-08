import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";
import {
  Title,
  CategoriesList,
  Category,
  Container,
} from "./Categories.styled";

export default function Categories({ changeCategory, changeRandom }) {
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState("");
  // const [joke, setJoke] = useState("");

  // const category = categories.map((category) => {
  //   return category;
  // });
  // function getRandom() {
  //   api.fetchRandomJokes().then((resp) => {
  //     setRandom(resp.value);
  //   });
  // }

  useEffect(() => {
    api.fetchCategories().then((resp) => {
      setCategories(resp);
    });
  }, []);

  // useEffect(() => {
  //   getRandom();
  // }, []);

  // function getByCategory(category) {
  //   api.fetchJokesByCategory(category).then((res) => {
  //     setJoke(res.value);
  //     console.log(res.value);
  //   });
  // }
  return (
    <>
      <Title>Categories</Title>
      <Container>
        {categories && (
          <CategoriesList>
            {categories.map((category) => (
              <Category
                onClick={() => changeCategory(category)}
                key={categories.indexOf(category)}
              >
                {category}
              </Category>
            ))}
            <Category onClick={() => changeCategory("")}>random</Category>
          </CategoriesList>
        )}
      </Container>
    </>
  );
}
