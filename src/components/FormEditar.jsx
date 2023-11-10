// styles
import styles from "../styles/components/FormEditar.module.css";

import { useEffect, useState } from "react";
import { usePatch } from "../hooks/usePatch";

import Select from 'react-select';
import { customStyles, genderOptions } from "../constants/SelectConfig.js";


const FormEditar = ({ id, anime }) => {
  const { editAnime, reset, response, error, loading } = usePatch();

  const [updates, setUpdates] = useState({});
  const [areInputsBlank, setAreInputsBlank] = useState(false);

  const [inputs, setInputs] = useState({
    title: '',
    gender: [],
    image: '',
    origin: '',
    studio: '',
    description: '',
    author: '',
  });

  useEffect(() => {
    if (anime) {
      let newUpdates = {};

      for (const key in inputs) {
        if (inputs[key] !== '' && inputs[key] !== anime[key]) {
          newUpdates[key] = inputs[key];
        } else {
          newUpdates[key] = anime[key];
        }
      }

      setUpdates(newUpdates);
    }
  }, [inputs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleGenderChange = (selectedOption) => {
    setInputs({
      ...inputs,
      gender: selectedOption.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAreInputsBlank(false);
    reset();

    if (Object.values(inputs).every((value) => value === '')) {
      setAreInputsBlank(true);
    } else {
      console.log('result: ', updates);

      // editAnime(updates, id);

      setInputs({
        title: '',
        gender: '',
        image: '',
        origin: '',
        studio: '',
        description: '',
        author: '',
      });
    }
  };

  

  return (
    <>
    <form onSubmit={handleSubmit} className={styles.formEditar__container}>
      <h2>Editar Anime ({anime.title}):</h2>

      <label>
        <p>Título:</p>
        <input
          required
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleInputChange}
        />
      </label>
    
      <Select
        value={inputs.gender}
        options={genderOptions}
        onChange={handleGenderChange}
        placeholder="Selecione o gênero:"
        className={styles.formEditar__select}
        styles={customStyles}
  
      />
   

      <label>
        <p>Imagem:</p>
        <input
          required
          type="text"
          name="image"
          value={inputs.image}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <p>Material Original:</p>
        <input
          required
          type="text"
          name="origin"
          value={inputs.origin}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <p>Estúdio:</p>
        <input
          required
          type="text"
          name="studio"
          value={inputs.studio}
          onChange={handleInputChange}
        />
      </label>

      

      <label className={styles.description__label}>
        <p>Descrição:</p>
        <textarea
          required
          name="description"
          value={inputs.description}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <p>Autor:</p>
        <input
          required
          type="text"
          name="author"
          value={inputs.author}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit" className="btn">
        Enviar
      </button>

      {response && <p className="success">Anime atualizado com sucesso.</p>}
      {error && <p className="error">Ocorreu um erro. Tente novamente</p>}
      {areInputsBlank && (
        <p className="error">Os campos estão vazios. Digite algo para atualizar.</p>
      )}
    </form>


</>
  );
};

export default FormEditar;
