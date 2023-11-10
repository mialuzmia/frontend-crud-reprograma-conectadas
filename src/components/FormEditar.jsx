// styles
import styles from "../styles/components/FormEditar.module.css";

import { useEffect, useState } from "react";
import { usePatch } from "../hooks/usePatch";

import Select from 'react-select';
import { customStyles, genderOptions } from "../constants/SelectConfig.js";


const FormEditar = ({ id, anime }) => {
  const { editAnime, reset, response, error, loading } = usePatch();
  const [updates, setUpdates] = useState(anime);

  const [areInputsBlank, setAreInputsBlank] = useState(false);

  const [title, setTitle] = useState(anime.title);
  const [image, setImage] = useState(anime.image);
  const [origin, setOrigin] = useState(anime.origin);
  const [studio, setStudio] = useState(anime.studio);
  const [description, setDescription] = useState(anime.description);
  const [authorship, setAuthorship] = useState(anime.authorship);


  const [gender, setGender] = useState(
    anime.gender.map((animeGender) => ({
      value: animeGender,
      label: animeGender,
    }))
  );

  const [genderFinal, setgenderFinal] = useState(anime.gender);

  useEffect(() => {
    if(anime){
      let newUpdates = {};
  
      if (title && title !== anime.title) {
        newUpdates.title = title;
      }
      else{
        newUpdates.title = anime.title;
        
      }
  
      if (image && image !== anime.image) {
        newUpdates.image = image;
      }
      else{
        newUpdates.image = anime.image;
        
      }
  
      if (origin && origin !== anime.origin) {
        newUpdates.origin = origin;
      }
      else{
        newUpdates.origin = anime.origin;
        
      }
  

      if (studio && studio !== anime.studio) {
        newUpdates.studio = studio;
      }
      else{
        newUpdates.studio = anime.studio;
        
      }
  
      if (description && description !== anime.description) {
        newUpdates.description = description;
      }
      else{
        newUpdates.description = anime.description;
        
      }
  
      if (authorship && authorship !== anime.authorship) {
        newUpdates.authorship = authorship;
      }
      else{
        newUpdates.authorship = anime.authorship;
        
      }
  
      if (gender.length > 0 && JSON.stringify(gender) !== JSON.stringify(anime.gender)) {
        newUpdates.gender = gender.map((selectedGender) => selectedGender.value);
      } else {
        newUpdates.gender = anime.gender.map((animeGender) => ({
          value: animeGender,
          label: animeGender, 
        }));
      }
  
      setUpdates(newUpdates)
    }
    
    // console.log("results:", updates);
    
  }, [title, gender, image, origin, studio, description, authorship])
 
  
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
      editAnime(updates, id);

  
      // setTitle('');
      // setGender([]);
      // setImage('');
      // setOrigin('');
      // setStudio('');
      // setDescription('');
      // setAuthorship('');

      setAreInputsBlank(false);
    }
  };


  const handleGenderChange = (selectedOptions) => {
    // setDisplayGender(selectedOptions);
    setGender(selectedOptions);

   
  };

  return (
    <>
    <form onSubmit={handleSubmit} className={styles.formEditar__container}>
      <h2>Editar Anime:</h2>

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
        Enviar
      </button>

      {/* <button onClick={() => {
        // console.log("display gender: ", displayGender );
        console.log("gender: ", gender);
        }}>
        aperta
      </button> */}

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
