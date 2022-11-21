import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import Link from 'next/link';

const Popular = () => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=9ab6e6fb43e948988d46be879553956c&number=10'
    );
    const data = await res.json();
    setApiData(data.recipes);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="my-20">
      <div className="max-w-[900px] w-full mx-auto">
        <p className="font-bold text-[#444] mb-2">Popular Picks</p>
        <div className="FCenter">
          <Splide
            options={{
              width: 900,
              perPage: 4,
              arrows: false,
              autoplay: true,
              gap: '3rem',
            }}
          >
            {apiData.map((el) => {
              return (
                <SplideSlide key={el.id}>
                  <Link
                    href={{
                      pathname: 'recipe',
                      query: { id: el.id },
                    }}
                  >
                    <Image
                      className="relative w-[270px] h-[250px] object-cover rounded-xl"
                      src={el.image}
                      alt="/"
                      width={260}
                      height={250}
                    />

                    <div className="absolute inset-0 bg-black/20 text-white rounded-xl ">
                      <p className="mt-44 font-bold text-sm tracking-widest text-center px-1">
                        {el.title}
                      </p>
                    </div>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Popular;
