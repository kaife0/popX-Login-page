import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/DetailsContext.jsx';

const Signup = () => {
    const navigate = useNavigate();
    const { setUserData } = useContext(MyContext);
    const [isDisabled, setIsDisabled] = useState(true);
    const [inputValue, setInputValue] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        agency: '',
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
            // Update context with all user data right before navigation
            setUserData({
                ...inputValue
            });
            navigate('/dashboard');
        }
    }

    useEffect(() => {
        if (!inputValue.name || !inputValue.phoneNumber || !inputValue.email || !inputValue.password || !inputValue.companyName || !inputValue.agency) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [inputValue]);

    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-sky-50'>
            <motion.div className='max-w-[450px] min-h-[620px] mx-5 flex flex-col gap-5 justify-start px-5 pt-7 rounded-2xl shadow-lg bg-white relative' initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <h1 className='text-3xl font-semibold sm:w-[60%] w-[80%]'>Create your PopX account</h1>
                <div className=''>
                    <form className='flex flex-col gap-5 text-[15px]' onSubmit={handleSubmit}>
                        <input type="text" name='name' className='focus:outline-blue-400 px-3 py-3 rounded-lg outline-1 outline-[#7a75754f]' placeholder='Full Name' value={inputValue.name} onChange={handleChange} required />
                        <input type="tel" name='phoneNumber' className='focus:outline-blue-400 px-3 py-3 rounded-lg outline-1 outline-[#7a75754f]' placeholder='Phone number' value={inputValue.phoneNumber} onChange={handleChange} required />
                        <input type="email" name='email' className='focus:outline-blue-400 px-3 py-3 rounded-lg outline-1 outline-[#7a75754f]' placeholder='Enter email address' value={inputValue.email} onChange={handleChange} required />
                        <input type="password" name='password' className='focus:outline-blue-400 px-3 py-3 rounded-lg outline-1 outline-[#7a75754f]' placeholder='Enter password' value={inputValue.password} onChange={handleChange} required />
                        <input type="text" name='companyName' className='focus:outline-blue-400 px-3 py-3 rounded-lg outline-1 outline-[#7a75754f]' placeholder='Company name' value={inputValue.companyName} onChange={handleChange} required />
                        <div className='px-3 flex flex-col gap-2'>
                            <p>Are you an agency?</p>
                            <div className='flex items-center gap-8'>
                                <div className='flex gap-2'>
                                    <input type="radio" name="agency" value="yes" onChange={handleChange} required />
                                    <label htmlFor="">Yes</label>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="radio" name="agency" value="no" onChange={handleChange} required />
                                    <label htmlFor="">No</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className={`${isDisabled ? 'bg-[#cbcbcb]' : 'bg-[#6c25ff]'} text-white font-medium py-3 rounded-lg duration-200 absolute bottom-7 w-[91%]`} disabled={isDisabled}>Create Account</button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Signup
