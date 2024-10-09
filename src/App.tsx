import { useState, useEffect } from "react";
import "./App.css";

type Movie = {
  id: number;
  title: string;
  imgSrc: string;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://yts.mx/api/v2/list_movies.json?sort_by=year&&limit=10"
        );
        const jsonData = await response.json();
        setMovies(jsonData.data.movies);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return <div className="">vite app</div>;
}

export default App;
