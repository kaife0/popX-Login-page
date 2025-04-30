import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValue(prev => ({
            ...prev,
            [name]: value
        }));

    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!isDisabled) {
            navigate('/dashboard');
        }
    }

    useEffect(() => {
        if (!inputValue.email || !inputValue.password) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }


    }, [inputValue]);



    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-sky-50'>
            <motion.div className='max-w-[450px] min-h-[620px] mx-5 flex flex-col gap-5 justify-start px-5 pt-7 rounded-2xl shadow-lg bg-white' initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold sm:w-[60%] w-[80%]'>Signin to your PopX account</h1>
                    <p className='text-[15px] w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium voluptas tempore.</p>
                </div>
                <div className=''>
                    <form className='flex flex-col gap-5 text-[15px]' onSubmit={handleSubmit}>
                        <input type="email" name='email' className='focus:outline-blue-400 px-3 py-3 rounded-lg outline-1 outline-[#7a75754f]' placeholder='Enter email address' value={inputValue.email} onChange={handleChange} required />
                        <input type="password" name='password' className='focus:outline-blue-400 px-3 py-3 rounded-lg outline-1 outline-[#7a75754f]' placeholder='Enter password' value={inputValue.password} onChange={handleChange} required />
                        <button type="submit" className={`${isDisabled ? 'bg-[#cbcbcb]' : 'bg-[#6c25ff]'} text-white font-medium py-3 rounded-lg duration-200`} disabled={isDisabled}>Login</button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Login
