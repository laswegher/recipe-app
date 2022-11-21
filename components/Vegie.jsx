import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Link from 'next/link';

const Vegie = () => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=9ab6e6fb43e948988d46be879553956c&tags=vegetarian&number=10'
    );
    const data = await res.json();
    setApiData(data.recipes);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="my-10">
      <div className="max-w-[900px] w-full mx-auto">
        <p className="font-bold text-[#444] mb-2">Our Vegie Picks</p>
        <div className="FCenter">
          <Splide
            options={{
              width: 900,
              perPage: 3,
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
                      className="relative w-[270px] h-[220px] object-cover rounded-xl"
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

export default Vegie;
