import { useState } from "react";

import { usePost } from "../hooks/usePost"

const FormCadastrar = () => {
  const { addAnime, error, loading, response, reset } = usePost();

  const [areInputsBlank, setAreInputsBlank] = useState(false);

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
    setAreInputsBlank(false);
    reset();

    if (Object.values(inputs).every((value) => value === '')) { //verifica se os innputs estao vazios
    
      setAreInputsBlank(true);

    }else{
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

    }


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
            required
            type="text"
            name={field.name}
            value={inputs[field.name]}
            onChange={handleInputChange}
          />
        </label>
      ))}
      <button type="submit">Adcionar</button>

      {response && <p className="success">Anime cadastrado com sucesso.</p>}
      {error && <p className="error">Ocorreu um erro. Tente novamente</p>}
      {areInputsBlank && <p className="error">Os campos estão vazios. Digite algo e tente novamente.</p>}
    </form>
  );
}

export default FormCadastrar