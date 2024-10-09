import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";

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
  return (
    <div className="">
      <Swiper modules={[Navigation]} slidesPerView={3} navigation>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
