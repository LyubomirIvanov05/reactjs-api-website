import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DogPage = () => {
  const [dog, setDog] = useState([]);
  const { id } = useParams();


console.log(id)

  useEffect(() => {
    async function fetchAPIData() {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const url = `https://api.thedogapi.com/v1/images/${id}`;
        const result = await fetch(url);
        const breed = await result.json();

        console.log(breed)
        const dogObject = {
          id: breed.id,
          name: breed.breeds[0].name,
          url: breed.url,
        }
        console.log(dogObject)
        setDog(dogObject)
    }

    fetchAPIData();
  }, []);
  if (!dog) {
    return <p>Dog not found!</p>;
  }
  return (
    <div>
      <img src={dog.url} alt={dog.name} />
      <h2>{dog.name}</h2>
    </div>
  );
};

export default DogPage;
