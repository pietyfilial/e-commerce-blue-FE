import { FaRegUser } from 'react-icons/fa6';
import { VscTriangleDown } from 'react-icons/vsc';
import { IoCartOutline } from 'react-icons/io5';
import SearchInput from './SearchInput/SearchInput';

const Header = () => {
  return (
    <>
      <div className='grid grid-cols-7 w-full bg-[#001489] px-[120px] py-[20px] text-white items-center'>
        {/* Left */}

        <div className='col-span-1 text-[18px] font-bold uppercase'>
          Blue Cheetah
        </div>

        {/* Middle */}

        <div className='col-span-4 flex bg-white items-center px-2 text-black rounded-lg h-10'>
          <SearchInput handleClick={() => {}} />
        </div>

        {/* Right */}

        <div className='col-span-2 flex justify-center items-center'>
          <div className='ml-10 flex items-center'>
            <FaRegUser size={'35px'} />
            <div>
              <p>Login / Register</p>
              <div className='flex items-center'>
                <p>Account</p>
                <VscTriangleDown className='pt-1' />
              </div>
            </div>
          </div>

          <div className='flex items-end ml-20'>
            <IoCartOutline size={'35px'} />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
