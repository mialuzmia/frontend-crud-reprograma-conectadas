// hooks
import { useGet } from "../hooks/useGet";
import { useEffect, useState } from "react";
import { usePatch } from "../hooks/usePatch";

const FormEditar = ({ id }) => {  
	const { data: anime } = useGet(`https://fast-animes.onrender.com/animes/${id}`);
	const { editAnime } = usePatch();	

	const [updates, setUpdates] = useState({});
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
      </form>
  )
}

export default FormEditar