import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";
import {
  Title,
  CategoriesList,
  Category,
  Container,
} from "./Categories.styled";

export default function Categories({ changeCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.fetchCategories().then((resp) => {
      setCategories(resp);
    });
  }, []);

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
