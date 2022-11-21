import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import { motion } from 'framer-motion';

const thai = () => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const res = await fetch(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=9ab6e6fb43e948988d46be879553956c&cuisine=thai&number=20'
    );
    const data = await res.json();
    setApiData(data.results);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div className="Container w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {apiData.map((el) => {
          return (
            <motion.div
              className="w-full "
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 500 }}
              key={el.id}
            >
              <FoodCard {...el} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default thai;
