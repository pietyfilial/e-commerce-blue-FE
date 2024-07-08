import { IoSearchSharp } from 'react-icons/io5';
import { SearchInputProps } from '../../types';

const SearchInput: React.FC<SearchInputProps> = ({ handleClick }) => {
  return (
    <>
      <IoSearchSharp
        size={'24px'}
        color='#001489'
      />
      <input
        type='text'
        placeholder='What are you looking for today ?'
        className='w-full px-2 border-none outline-none'
      />
      <button
        className='text-[#001489] px-3 border-l border-gray-300'
        onClick={handleClick}>
        Search
      </button>
    </>
  );
};

export default SearchInput;
