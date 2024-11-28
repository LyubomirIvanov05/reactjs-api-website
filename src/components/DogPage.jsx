import { useParams } from 'react-router-dom';

const DogPage = ({ dogs }) => {
  const { id } = useParams();
  const dog = dogs.find((d) => d.id === id);

  if (!dog) {
    return <p>Dog not found!</p>;
  }

  return (
    <div>
      <img src={dog.image} alt={dog.name} />
      <h2>{dog.name}</h2>
    </div>
  );
};

export default DogPage;
