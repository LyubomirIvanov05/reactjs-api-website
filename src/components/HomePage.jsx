import DogCard from "./DogCard"

const HomePage = ({ dogs }) => {

    return (
        <>
        <h1 className="text-red-400 text-center mt-20 mb-6 text-6xl">Find out more about your dog!</h1>
        <div className="grid grid-cols-2 gap-6 p-6">
          {dogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div></>
      );
}

export default HomePage;