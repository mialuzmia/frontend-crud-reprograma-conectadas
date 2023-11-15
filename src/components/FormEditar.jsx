// styles
import styles from "../styles/components/FormEditar.module.css";

import { useEffect, useState, useRef } from "react";
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

  const [newAuthor, setNewAuthor] = useState("");

  const authorsInput = useRef(null)

  const [gender, setGender] = useState(
    anime.gender.map((animeGender) => ({
      value: animeGender,
      label: animeGender,
    }))
  );

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
      } else {
        newUpdates.authorship = anime.authorship;
        // Initialize newAuthor with the first author in the list
        // if (anime.authorship.length > 0 && newAuthor === "") {
        //   setNewAuthor(anime.authorship[0]);
        // }
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
    
  }, [title, gender, image, origin, studio, description, authorship])
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    
    if (Object.values(updates).every((value) => value === '')) {
      setAreInputsBlank(true);
    } else {
      
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
    setGender(selectedOptions);   
  };

  const handleAdd = (e) => {
  e.preventDefault()
  const author = newAuthor.trim();
  if (author && !authorship.includes(author)) {
    setAuthorship(prevAuthorship => [...prevAuthorship, author]);
  }
  setNewAuthor('');

  authorsInput.current.focus();
}

  return (
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

      <label className={styles.formEditar__authorsContainer}>
        <div >
        <p>Autoria: </p>
          <input 
            // required={authorship.length === 0} 
            name="authorship"
            type="text" 
            onChange={(e) => setNewAuthor(e.target.value)}
            value={newAuthor}
            ref={authorsInput}
          />
          <button onClick={handleAdd} className="btn">add</button>
        </div>
      </label>  

      <p>Autores adicionados: {authorship.map(author => <em key={author}>{author}, </em>)}</p>

      <button type="submit" className="btn">
        Enviar
      </button>


      {response && <p className="success">Anime atualizado com sucesso.</p>}
      {error && <p className="error">Ocorreu um erro. Tente novamente</p>}
      {areInputsBlank && (
        <p className="error">Os campos estão vazios. Digite algo para atualizar.</p>
      )}

    </form>
  );
};

export default FormEditar;
