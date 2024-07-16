import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.div
      className='flex items-center justify-center h-screen bg-[#787878]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <div className='flex w-1/2 overflow-hidden bg-white rounded-2xl'>
        <div
          className='flex flex-col justify-between flex-1 gap-6 p-12 bg-center bg-cover text-white'
          style={{
            backgroundImage:
              'linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("../../assets/bg-login.jpg")',
          }}>
          <h1 className='text-3xl'>Welcome back to BlueCheetah!</h1>
          <p className='text-lg'>
            Welcome to BlueCheetah, your premier destination for all things
            related to electrical devices. Whether you're a homeowner looking to
            upgrade your appliances, a business seeking efficient power
            solutions, or an enthusiast in search of the latest technology, our
            website is designed to cater to all your electrical needs.
          </p>
          <span>Don't you have a account?</span>
          <Link
            to='/register'
            className='flex justify-center'>
            <button className='bg-white text-[#001489] border-[2px] border-[#001489] px-[80px] py-3 font-bold rounded-lg hover:bg-[#001489] hover:text-white transition-colors duration-200 ease-in-out'>
              Register
            </button>
          </Link>
        </div>
        <div className='flex flex-col justify-center flex-1 gap-12 p-12'>
          <h1 className='self-center text-3xl text-[#001489]'>Login</h1>
          <form className='flex flex-col gap-6'>
            <input
              type='text'
              placeholder='Username'
              className='p-2 border-b border-gray-300 outline-none'
            />
            <input
              type='password'
              placeholder='Password'
              className='p-2 border-b border-gray-300 outline-none'
            />
            <button className='text-white border-[2px] border-[#001489] px-[80px] py-3 font-bold rounded-lg bg-[#001489] hover:bg-white hover:text-[#001489] transition-colors duration-200 ease-in-out'>
              Log in
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
