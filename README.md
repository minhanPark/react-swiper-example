# react swiper example

## 기본 세팅

```tsx
// App.tsx
// 기본 코드를 다 지우고 데이터를 불러오는 코드를 작성한다.

import { useState, useEffect } from "react";
/** swiper나 기본 css가 들어갈 파일 */
import "./App.css";

/** 불러올 영화에서 필요한 부분만 타입 선언 */
type Movie = {
  id: number;
  title: string;
  imgSrc: string;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  /** 영화 데이터를 담을 배열 */
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    /** 영화 데이터를 불러오는 함수 */
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
}
```

## Swiper 설치하기

```bash
  npm i swiper
```

위의 명령어로 설치한다.

```tsx
import { Swiper, SwiperSlide } from "swiper/react";
/**네비게이션 기능을 사용하려면 모듈에서 불러와야함 */
import { Navigation } from "swiper/modules";

import "swiper/css";
/**네비게이션 기능을 사용하려면 css도 불러와야함 */
import "swiper/css/navigation";

function App() {
  return (
    <div className="">
      {/* 네비게이션 기능을 사용하려면 Swiper에 modules를 넣어줘야함 */}
      <Swiper modules={[Navigation]} slidesPerView={3} navigation>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
```
