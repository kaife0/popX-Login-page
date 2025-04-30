import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-sky-50'>
      <motion.div className='max-w-[450px] min-h-[620px] mx-5 flex flex-col gap-5 justify-end px-5 pb-7 rounded-2xl shadow-lg bg-white' initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-semibold'>Welcome to  PopX</h1>
          <p className=''>Let's connect and explore amazing content. Log in to continue your journey with us!</p>
        </div>
        <div className='flex flex-col gap-4 text-[15px]'>
          <Link to='/auth/signup'> <motion.button className='bg-[#6c25ff] text-white px-7 py-3 rounded-lg w-full font-medium hover:bg-[#8981ff]  duration-200 ' initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}  >Create Account</motion.button></Link>
          <Link to='/auth/login'><motion.button className='bg-[#cebafb] px-7 py-3 rounded-lg w-full font-medium hover:bg-[#d2a4fd]' initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>Already Registered? Login</motion.button></Link>
        </div>

      </motion.div>
    </div>
  )
}

export default App
