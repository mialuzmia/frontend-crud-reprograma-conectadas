// styles
import styles from "../styles/components/FormCadastrar.module.css"

import { useState, useEffect } from "react";
import { usePost } from "../hooks/usePost"

import Select from 'react-select';
import { customStyles, genderOptions } from "../constants/SelectConfig.js";


const FormCadastrar = () => {
  const { addAnime, error, loading, response, reset } = usePost();

  const [updates, setUpdates] = useState({});

  const [areInputsBlank, setAreInputsBlank] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [origin, setOrigin] = useState("");
  const [studio, setStudio] = useState("");
  const [description, setDescription] = useState("");
  const [authorship, setAuthorship] = useState(["oda genio"]);

  const [gender, setGender] = useState([]);


  useEffect(() => {
      let newUpdates = {};
  
      if (title && title !== "") {
        newUpdates.title = title;
      }
  
      if (image && image !== "") {
        newUpdates.image = image;
      }
    
  
      if (origin && origin !== "") {
        newUpdates.origin = origin;
      }

      if (studio && studio !== "") {
        newUpdates.studio = studio;
      }
  
      if (description && description !== "") {
        newUpdates.description = description;
      }
  
      if (authorship.length > 0) {
        newUpdates.authorship = authorship;
      }
    
      if (gender.length > 0){
        newUpdates.gender = gender.map((selectedGender) => selectedGender.value);
      } 
  
      setUpdates(newUpdates)
    }
    
    // console.log("results:", updates);
    
  , [title, gender, image, origin, studio, description, authorship])
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    
    if (Object.values(updates).every((value) => value === '')) {
      setAreInputsBlank(true);
    } else {
      
      // const finalUpdates = {
      //   ...updates,
      //   gender: gender.map((selectedGender) => selectedGender.value),
      // }

      console.log('result: ', updates);
      addAnime(updates);

  
      // setTitle('');
      // setGender([]);
      // setImage('');
      // setOrigin('');
      // setStudio('');
      // setDescription('');
      // setAuthorship([]);

      setAreInputsBlank(false);
    }
  };


  const handleGenderChange = (selectedOptions) => {
    // setDisplayGender(selectedOptions);
    setGender(selectedOptions);

   
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formCadastrar__container}>
      <h2>Cadastrar Anime:</h2>

      <label>
        <p>Título:</p>
        <input
          required
          type="text"
          name="title"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />
      </label>
    
      <Select
        value={gender}
        options={genderOptions}
        onChange={handleGenderChange}
        placeholder="Selecione o gênero:"
        className={styles.formEditar__select}
        styles={customStyles}
        isMulti={true}
  
      />
   
      <label>
        <p>Imagem:</p>
        <input
          required
          type="text"
          name="image"
          value={image}
          onChange={(e) => {setImage(e.target.value)}}
        />
      </label>

      <label>
        <p>Material Original:</p>
        <input
          required
          type="text"
          name="origin"
          value={origin}
          onChange={(e) => {setOrigin(e.target.value)}}
        />
      </label>

      <label>
        <p>Estúdio:</p>
        <input
          required
          type="text"
          name="studio"
          value={studio}
          onChange={(e) => {setStudio(e.target.value)}}
        />
      </label>

      <label className={styles.description__label}>
        <p>Descrição:</p>
        <textarea
          required
          name="description"
          value={description}
          onChange={(e) => {setDescription(e.target.value)}}
        />
      </label>

      {/* <label>
        <p>Autor:</p>
        <input
          required
          type="text"
          name="author"
          value={authorship}
          onChange={(e) => {setAuthorship(e.target.value)}}
        />
      </label> */}

      <button type="submit" className="btn">
        Cadastrar
      </button>

      {response && <p className="success">Anime atualizado com sucesso.</p>}
      {error && <p className="error">Ocorreu um erro. Tente novamente</p>}
      {areInputsBlank && (
        <p className="error">Os campos estão vazios. Digite algo para atualizar.</p>
      )}
    </form>

  );
}

export default FormCadastrar