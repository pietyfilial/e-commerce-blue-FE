import React from 'react';

const ProductDetailItem = () => {
  return (
    <>
      <div className='mx-[120px] px-3 grid grid-cols-5 bg-white'>
        {/* Main image */}

        <div className='flex flex-col col-span-2 items-center py-8'>
          <img
            src='https://lh3.googleusercontent.com/RmgcDSPB9S7E24ewRRjyD0CT7HbUkuhZKEF_DBt6SoHMsnKa8-V9C9xdx3Gk-ryBW0MpqIyv7z8kdMeOWdNIWyu0cAIuZszQ=w1000-rw'
            alt='product'
            className='w-[400px] h-[450px] object-fill'
          />

          {/* List image */}

          <div className='grid grid-cols-5 mt-5 gap-x-4'>
            <img
              src='https://lh3.googleusercontent.com/mxkBkJLsHoteolx4AKQQjjzkGCv_Y4rwgCUiDuRlw_jZwwO7OCjRrSA5k_UHwXLz_u6G7tGJrJpbNHhsI5ZEOjLPYh83hNA=w1000-rw'
              alt=''
              className='col-span-1'
            />
            <img
              src='https://lh3.googleusercontent.com/ZuU_1FNx4QQcMPhEme5xUMpRZhBR14_S7wX6TXva_375Nkw7njomrRS3u6J0-6JCUyzmz2b-YCIdlDBheySdhFBGcMdU63I=w1000-rw'
              alt=''
              className='col-span-1'
            />
            <img
              src='https://lh3.googleusercontent.com/XeJIl-Yj-ADi4pAMJKSfCwF7tYZbw6Wbahgew0GBMqAZ6M1uHRgYe8Oj915igMJlvQWchepBrKqgRx1zo1rHHDPAsv_LCJI=w1000-rw'
              alt=''
              className='col-span-1'
            />
            <img
              src='https://lh3.googleusercontent.com/5KJb1fZUPN2rwaGuQPxJ1sYYnCVH3jSogDT00pRyJ-8EZFn7dFgBAAEye5gmLnjXjcD77vphvdEBTtgS-JWRo-9sctsDWiegGg=w1000-rw'
              alt=''
              className='col-span-1'
            />
            <img
              src='https://lh3.googleusercontent.com/JrZUBlWsJ1TMPRaqeh0EIoS6IV2Mpa5O5nakPV9jPp5JwKpoKMwaGTpEvzGmq10XODYpEDzkYg7SKC1WaS-CipbnrZvpm8KpkA=w1000-rw'
              alt=''
              className='col-span-1'
            />
          </div>
        </div>

        <div className='col-span-3 my-8 px-8 border-gray-300 border-l-2 space-y-4'>
          <label className='text-3xl font-semibold'>
            Laptop Acer Gaming Aspire 7 A715-76G-5806 (i5-12450H) (Black)
          </label>

          <div className='flex'>
            <p className='pr-3'>
              Brand: <span className='text-[#1435C3]'>Acer</span>{' '}
            </p>

            <p className='border-gray-300 border-l-2 pl-3'>
              1000+ products sold
            </p>
          </div>

          <p className='text-[#1435C3] text-3xl font-bold'>$896.36</p>
          <div className='border-dashed border-gray-300 border-b-2' />

          <div className='flex gap-6'>
            <button className='text-white border-[2px] border-[#001489] px-[80px] py-3 font-bold rounded-lg bg-[#001489] hover:bg-white hover:text-[#001489] transition-colors duration-200 ease-in-out'>
              Buy Now
            </button>
            <button className='text-[#001489] border-[2px] border-[#001489] px-[80px] py-3 font-bold rounded-lg hover:bg-[#001489] hover:text-white transition-colors duration-200 ease-in-out'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailItem;
