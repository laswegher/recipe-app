import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const recipe = () => {
  const router = useRouter();
  const { id } = router.query;
  const [active, setActive] = useState('instruction');
  const [recipeData, setRecipeData] = useState([]);

  const getRecipeData = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=9ab6e6fb43e948988d46be879553956c`
    );
    const data = await res.json();
    setRecipeData(data);
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  const ingredientJSX = recipeData.extendedIngredients?.map((el) => {
    return <li key={el.id}>{el.name}</li>;
  });

  return (
    <div className="mt-10">
      {/* Container */}
      <div className="w-full grid grid-cols-3 gap-10 max-w-[750px] mx-auto">
        {/* Image */}
        <div className="col-span-1">
          <Image
            src={recipeData.image}
            alt="/"
            width={300}
            height={300}
            className="w-[250px] h-[250px] object-cover rounded-xl"
          />
        </div>
        {/* Content */}
        <div className="col-span-2">
          {/* Actions */}
          <div>
            <button
              style={{
                backgroundColor:
                  active === 'instruction' ? '#444' : '#fff',
                color: active === 'instruction' ? '#fff' : '#444',
              }}
              onClick={() => setActive('instruction')}
              className="border border-[#333] text-sm font-bold px-2 py-1 tracking-wider text-[#333] mr-5 cursor-pointer"
            >
              Instructions
            </button>
            <button
              style={{
                backgroundColor:
                  active === 'ingredient' ? '#444' : '#fff',
                color: active === 'ingredient' ? '#fff' : '#444',
              }}
              onClick={() => setActive('ingredient')}
              className="border border-[#333] text-sm font-bold px-2 py-1 tracking-wider text-[#333]  cursor-pointer"
            >
              Ingredients
            </button>
          </div>

          {/* instruction */}
          {active === 'instruction' && (
            <div className="mt-5 w-full">
              {/* Summary */}
              <div
                className="mt-5 text-sm tracking-wider leading-6 "
                dangerouslySetInnerHTML={{
                  __html: recipeData.summary,
                }}
              />
              {/* Instructions */}
              <div
                className="mt-5 text-sm tracking-wider leading-6"
                dangerouslySetInnerHTML={{
                  __html: recipeData.instructions,
                }}
              />
            </div>
          )}

          {/* ingredient */}
          {active === 'ingredient' && (
            <div className="mt-5 w-full">{ingredientJSX}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default recipe;
