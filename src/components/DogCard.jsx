import { Link } from 'react-router-dom';

const DogPage = ({ dog }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-md truncate">
          <img src={dog.image} alt={dog.name} className="w-full max-h-96 object-contain rounded-md " />
          <h2 className="text-lg font-bold mt-4">{dog.name}</h2>
          <p className="text-gray-600">{dog.description}</p>
          <Link to={`/dog/${dog.id}`} className="top-2 right-2 px-8 rounded-lg bg-sky-500 hover:bg-sky-700 text-white">
            View Details
          </Link>
        </div>
      );
    
};

export default DogPage;

