import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = (props) => {
  return (
    <Link href={{ pathname: 'recipe', query: { id: props.id } }}>
      <div className="cursor-pointer">
        <Image
          className="w-full h-[220px] object-cover rounded-lg "
          src={props.image}
          alt="/"
          priority
          width={300}
          height={220}
        />
        <p className="text-sm mt-2">{props.title}</p>
      </div>
    </Link>
  );
};

export default FoodCard;
