import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DogPage from './components/DogPage';

function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPIData() {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const url = `https://api.thedogapi.com/v1/images/search?limit=20&api_key=${API_KEY}&include_breeds=true`;
        const result = await fetch(url);
        const data = await result.json();

        const formattedData = data.map((dog) => {
          const breed = dog.breeds[0];
          return {
            id: dog.id,
            image: dog.url,
            name: breed ? breed.name : "Unknown Breed",
            description: breed ? breed.description : "No description available",
          };
        });

        setDogs(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchAPIData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage dogs={dogs} />} />
        <Route path="/dog/:id" element={<DogPage dogs={dogs} />} /> {/* Dynamic route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
