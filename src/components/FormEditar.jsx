// hooks
import { useGet } from "../hooks/useGet";
import { useEffect, useState } from "react";
import { usePatch } from "../hooks/usePatch";

const FormEditar = ({ id }) => {  
	const { data: anime } = useGet(`https://fast-animes.onrender.com/animes/${id}`);
	const { editAnime, reset,response, error, loading } = usePatch();	

	const [updates, setUpdates] = useState({});
  const [areInputsBlank, setAreInputsBlank] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    gender: '',
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
	
	const handleSubmit = (e) => {
		e.preventDefault();
    setAreInputsBlank(false);
    reset();

    if (Object.values(inputs).every((value) => value === '')) { //verifica se os innputs estao vazios
    
      setAreInputsBlank(true);

    }else{
      console.log('result: ', updates);
  
      editAnime(updates, id);
  
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

	const inputFields = [
    { name: 'title', label: 'Título' },
    { name: 'gender', label: 'Gênero' },
    { name: 'image', label: 'Imagem' },
    { name: 'origin', label: 'Material Original' },
    { name: 'studio', label: 'Estúdio' },
    { name: 'description', label: 'Descrição' },
    { name: 'author', label: 'Autor' },
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
        <button type="submit">Submit</button>

        {response && <p className="success">Anime atualizado com sucesso.</p>}
        {error && <p className="error">Ocorreu um erro. Tente novamente</p>}
        {areInputsBlank && <p className="error">Os campos estão vazios. Digite algo para atualizar.</p>}


      </form>
  )
}

export default FormEditar