import { useState } from 'react';
import Card from '../../components/common/Card';
import Slider from '../../components/Slider/Slider';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'Television',
  'Laptop',
  'Refrigerator',
  'Washing machine',
  'Computer',
  'Tablet',
];

const products = [
  {
    id: 1,
    label: 'Huawei Honor 90 Smart 5G Dual SIM 128GB 4GB RAM Green',
    img: 'https://images.mobileshop.eu/1713945145/product-medium/huawei-honor-90-smart-5g-dual-sim-128gb-4gb-ram-green.jpg',
    price: '$170.00',
  },
  {
    id: 2,
    label: 'Samsung Galaxy A35 5G Dual SIM 128GB 6GB RAM SM-A356 Navy Black',
    img: 'https://images.mobileshop.eu/1711458081/product-medium/samsung-galaxy-a35-5g-dual-sim-128gb-6gb-ram-sm-a356-navy-black.jpg',
    price: '$257.00',
  },
  {
    id: 3,
    label: 'Lenovo V15 Gen3 512GB 8GB RAM 82TT00M2IX Grey',
    img: 'https://images.mobileshop.eu/1703063602/product-medium/lenovo-v15-gen3-512gb-8gb-ram-82tt00m2ix-grey.jpg',
    price: '$170.00',
  },
  {
    id: 4,
    label: 'Apple MacBook Air 13.6 (2022) 256GB 8GB RAM MLXW3 Grey',
    img: 'https://images.mobileshop.eu/1687782880/product-medium/apple-macbook-air-13-6-2022-256gb-8gb-ram-mlxw3-grey.jpg',
    price: '$1052.00',
  },
  {
    id: 5,
    label: 'Samsung Galaxy S24 5G Dual SIM 128GB 8GB RAM SM-S921 Black',
    img: 'https://images.mobileshop.eu/1707122295/product-medium/samsung-galaxy-s24-5g-dual-sim-128gb-8gb-ram-sm-s921-black.jpg',
    price: '$604.00',
  },
  {
    id: 6,
    label: 'Google Pixel 8a 5G Dual SIM 128GB 8GB RAM Obsidian Black',
    img: 'https://images.mobileshop.eu/1717141071/product-medium/google-pixel-8a-5g-dual-sim-128gb-8gb-ram-obsidian-black.jpg',
    price: '$514.00',
  },
  {
    id: 7,
    label: 'Xiaomi 14 5G Dual SIM 512GB 12GB RAM White',
    img: 'https://images.mobileshop.eu/1708942866/product-medium/xiaomi-14-5g-dual-sim-512gb-12gb-ram-white.jpg',
    price: '$716.00',
  },
  {
    id: 8,
    label: 'Samsung Galaxy A55 5G Dual SIM 128GB 8GB RAM SM-A556 Navy Black',
    img: 'https://images.mobileshop.eu/1711701775/product-medium/samsung-galaxy-a55-5g-dual-sim-128gb-8gb-ram-sm-a556-navy-black.jpg',
    price: '$318.00',
  },
  {
    id: 9,
    label: 'Xiaomi Redmi Note 13 Pro Plus 5G Dual SIM 256GB 8GB RAM Black',
    img: 'https://images.mobileshop.eu/1709287385/product-medium/xiaomi-redmi-note-13-pro-plus-5g-dual-sim-256gb-8gb-ram-black.jpg',
    price: '$348.00',
  },
  {
    id: 10,
    label: 'Samsung Galaxy Watch6 Classic LTE 47mm SM-R965 Silver',
    img: 'https://images.mobileshop.eu/1694509812/product-medium/samsung-galaxy-watch6-classic-lte-47mm-sm-r965-silver.jpg',
    price: '$289.00',
  },
  {
    id: 11,
    label: 'Apple iPhone 15 5G Dual eSIM 128GB 6GB RAM Black',
    img: 'https://images.mobileshop.eu/1697200206/product-medium/apple-iphone-15-5g-dual-esim-128gb-6gb-ram-black.jpg',
    price: '$821.00',
  },
  {
    id: 12,
    label: 'Nintendo Switch Oled Blue Red',
    img: 'https://images.mobileshop.eu/1634654634/product-medium/nintendo-switch-oled-blue-red.jpg',
    price: '$345.00',
  },
  {
    id: 13,
    label: 'Samsung Galaxy Buds2 Pro R510 Graphite Grey',
    img: 'https://images.mobileshop.eu/1660473801/product-medium/samsung-galaxy-buds2-pro-r510-graphite-grey.jpg',
    price: '$142.00',
  },
  {
    id: 14,
    label: 'Samsung Galaxy Tab S9 Ultra 5G 256GB 12GB RAM SM-X916 Beige',
    img: 'https://images.mobileshop.eu/1699001855/product-medium/samsung-galaxy-tab-s9-ultra-5g-256gb-12gb-ram-sm-x916-beige.jpg',
    price: '$1034.00',
  },
  {
    id: 15,
    label: 'Apple iPad Air 11 (2024) WiFi 512GB 8GB RAM Blue',
    img: 'https://images.mobileshop.eu/1719497382/product-medium/apple-ipad-air-11-2024-wifi-512gb-8gb-ram-blue.jpg',
    price: '$999.00',
  },
];

const HomePage = () => {
  const [quantity, setQuantity] = useState<number>(4);

  const showMoreProducts = () => {
    setQuantity(products.length);
  };

  const showLessProducts = () => {
    setQuantity(4);
  };

  return (
    <>
      <div className='mx-[120px] space-y-3 mt-24'>
        <div className='flex justify-around border-b border-gray-300 h-10 items-center'>
          {categories.map((item, index) => {
            return (
              <p
                key={index}
                className='font-bold'>
                {item}
              </p>
            );
          })}
        </div>

        <div className='mt-3 bg-[#efefef]'>
          <Slider />
        </div>

        <h1 className='pt-10'>Products</h1>

        <div className='flex flex-col items-center border-black border-t-2'>
          <div className='grid grid-cols-4 gap-y-10 py-4 gap-x-16'>
            <AnimatePresence>
              {products.slice(0, quantity).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}>
                  <Card
                    label={item.label}
                    imgSrc={item.img}
                    price={item.price}
                    detailButton={() => {}}
                    submitButton={() => {}}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {quantity < products.length && (
            <button
              onClick={showMoreProducts}
              className='mt-4 text-[#001489] border-[2px] border-[#001489] px-[80px] py-3 font-bold rounded-lg hover:bg-[#001489] hover:text-white transition-colors duration-200 ease-in-out'>
              See more
            </button>
          )}

          {quantity === products.length && (
            <button
              onClick={showLessProducts}
              className='mt-4 text-[#001489] border-[2px] border-[#001489] px-[80px] py-3 font-bold rounded-lg hover:bg-[#001489] hover:text-white transition-colors duration-200 ease-in-out'>
              See less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
