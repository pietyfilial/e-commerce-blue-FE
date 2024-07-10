import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({
  imgSrc,
  label,
  price,
  submitButton,
  detailButton,
}) => {
  return (
    <div className='relative p-4 group border-[#001489] h-[560px] w-[270px] flex flex-col items-center text-center rounded-xl hover:shadow-2xl hover:border'>
      <img
        src={imgSrc}
        alt={label}
      />

      <div className='absolute top-[48%] space-y-4 px-2'>
        <label className='font-bold text-lg'>{label}</label>
        <p className='font-bold text-3xl'>{price}</p>
      </div>

      <div className='absolute bottom-[5%] space-y-2'>
        <button
          onClick={submitButton}
          className='bg-[#001489] text-white px-10 py-3 rounded-full font-bold transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
          Add to cart
        </button>
        <button
          onClick={detailButton}
          className='border border-[#001489] text-[#001489] px-10 py-3 rounded-full font-bold transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
          View Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
