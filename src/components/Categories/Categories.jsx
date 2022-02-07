import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";
import { Title, CategoriesList, Category } from "./Categories.styled";

export default function Categories({ changeCategory, changeRandom }) {
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState("");

  useEffect(() => {
    api.fetchCategories().then((resp) => {
      setCategories(resp);
    });
  }, []);
  useEffect(() => {
    getRandom();
  });

  function getRandom() {
    api.fetchRandomJokes().then((resp) => {
      setRandom(resp.value);
    });
  }

  return (
    <>
      <Title>Categories</Title>
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
          <Category onClick={() => changeRandom(random)}>random</Category>
        </CategoriesList>
      )}
    </>
  );
}
