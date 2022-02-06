import { useState, useEffect } from "react";
import * as api from "../../services/chucknorris-api";

export default function Categories({ changeCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.fetchCategories().then((resp) => {
      setCategories(resp);
    });
  });
  return (
    <>
      <h1>Categories</h1>
      {categories && (
        <ul>
          {categories.map((category) => (
            <li
              onClick={() => changeCategory(category)}
              key={categories.indexOf(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
