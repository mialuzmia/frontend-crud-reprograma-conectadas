import { useState } from "react";

import { usePost } from "../hooks/usePost"

const formCadastrar = () => {
  const { addAnime } = usePost();

	const [inputs, setInputs] = useState({
    title: "",
    gender: "",
    image: "",
    origin: "",
    studio: "",
    description: "",
    author: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log(inputs);
    addAnime(inputs);

    setInputs({
      title: "",
      gender: "",
      image: "",
      origin: "",
      studio: "",
      description: "",
      author: "",
    });
  };

  const inputFields = [
    { name: "title", label: "Título" },
    { name: "gender", label: "Gênero" },
    { name: "image", label: "Imagem" },
    { name: "origin", label: "Material Original" },
    { name: "studio", label: "Estúdio" },
    { name: "description", label: "Descrição" },
    { name: "author", label: "Autor" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((field) => (
        <label key={field.name}>
          {field.label}:
          <input
            type="text"
            name={field.name}
            value={inputs[field.name]}
            onChange={handleInputChange}
          />
        </label>
      ))}
      <button type="submit">Adcionar</button>
    </form>
  );
}

export default formCadastrar