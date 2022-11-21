import React, { useState } from 'react';
import { SiCodechef } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  GiFullPizza,
  GiSushis,
  GiFastNoodles,
  GiHamburger,
} from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  // Handeling form data state
  const [searchData, setSearchData] = useState('');

  // Using useRouter to navigate searched data
  const router = useRouter();

  //Handle onSubmit Event Listener
  const handleSubmit = (e) => {
    // avoiding refresing page
    e.preventDefault();

    // Navigating Data to searched page url
    const href = { pathname: 'search', query: { name: searchData } };
    router.push(href);

    // Cleaning search input field
    setSearchData(``);
  };

  return (
    <div className="Container flex sm:items-start items-center gap-3 sm:gap-0 flex-col">
      {/* Logo */}
      <Link href="/">
        <div className="flex-1 text-[#333] cursor-pointer">
          <SiCodechef size={50} />
        </div>
      </Link>

      {/* Search Input */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-[400px] mx-auto"
      >
        <input
          className="relative w-full  bg-[#444] text-white pl-10 py-1 text-lg outline-none rounded-lg"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearchData(e.target.value)}
          value={searchData}
        />
        <div className="absolute top-2 left-2 text-white">
          <AiOutlineSearch size={20} />
        </div>
      </form>

      {/* cuisine */}
      <div className="grid grid-cols-4 w-full max-w-max mx-auto gap-4 sm:gap-10 mt-5 sm:mt-7 text-2xl sm:text-4xl ">
        <Link href="/italian">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="FCenter flex-col cursor-pointer"
          >
            <div className="bg-[#333] p-2 rounded-full text-white">
              <GiFullPizza />
            </div>
            <p className="font-semibold text-xs tracking-widest text-[#333]">
              Italian
            </p>
          </motion.div>
        </Link>

        <Link href="/japanese">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="FCenter flex-col cursor-pointer"
          >
            <div className="bg-[#333] p-2 rounded-full text-white">
              <GiSushis />
            </div>
            <p className="font-semibold text-xs tracking-widest text-[#333]">
              Japanese
            </p>
          </motion.div>
        </Link>

        <Link href="/american">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="FCenter flex-col cursor-pointer"
          >
            <div className="bg-[#333] p-2 rounded-full text-white">
              <GiHamburger />
            </div>
            <p className="font-semibold text-xs tracking-widest text-[#333]">
              American
            </p>
          </motion.div>
        </Link>

        <Link href="/thai">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="FCenter flex-col cursor-pointer"
          >
            <div className="bg-[#333] p-2 rounded-full text-white">
              <GiFastNoodles />
            </div>
            <p className="font-semibold text-xs tracking-widest text-[#333]">
              Thai
            </p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
