// styles
import styles from "../styles/components/FormCadastrar.module.css"

import { useState, useEffect, useRef } from "react";
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
  const [authorship, setAuthorship] = useState([]);

  const [newAuthor, setNewAuthor] = useState("");

  const authorsInput = useRef(null)

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
    
    if (Object.values(updates).every((value) => value === '') || authorship.length === 0) {
      setAreInputsBlank(true);
    } else {
      
      // const finalUpdates = {
      //   ...updates,
      //   gender: gender.map((selectedGender) => selectedGender.value),
      // }

      console.log('result: ', updates);
      addAnime(updates);

  
      setTitle('');
      setGender([]);
      setImage('');
      setOrigin('');
      setStudio('');
      setDescription('');
      setAuthorship([]);

      setAreInputsBlank(false);
    }
  };


  const handleGenderChange = (selectedOptions) => {
    // setDisplayGender(selectedOptions);
    setGender(selectedOptions);

   
  };

  const handleAdd = (e) => {
    e.preventDefault()
    const author = newAuthor.trim();
    if(author && !authorship.includes(author)){
      setAuthorship(prevAuthorship => [...prevAuthorship, author]);
    }
    setNewAuthor('');
    authorsInput.current.focus;
  }

  

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
        className={styles.formCadastrar__select}
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

      
      <label className={styles.formCadastrar__authorsContainer}>
        <div >
        <p>Autoria: </p>
          <input 
            required={authorship.length === 0} 
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
        Cadastrar
      </button>

      {response && <p className="success">Anime adcionado com sucesso.</p>}
      {error && <p className="error">Ocorreu um erro. Tente novamente</p>}
      {areInputsBlank && (
        <p className="error">Os campos estão vazios. Digite algo para atualizar.</p>
      )}
    </form>

  );
}

export default FormCadastrar