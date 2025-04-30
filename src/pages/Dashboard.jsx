import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosCamera } from "react-icons/io";
import MyContext from '../context/DetailsContext.jsx';

const Dashboard = () => {
    const { userData } = useContext(MyContext);
    const [image, setImage] = useState("https://educase-india-test.vercel.app/assets/profile-BEbI9wIZ.png");

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    }

    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-sky-50'>
            <motion.div className='max-w-[450px] min-h-[620px] mx-5 flex flex-col gap-5 justify-start rounded-2xl shadow-lg bg-[#f7f8f9]' initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <p className='bg-white w-full py-3.5 px-5 font-medium rounded-t-2xl'>Account Settings</p>
                <div className='flex gap-3 px-5'>
                    <div className='relative'>
                        <img className='w-[70px] h-[70px] rounded-full object-cover object-top' src={image} alt="Profile" />
                        <label htmlFor="file-upload" className="absolute right-0 top-10 cursor-pointer">
                            <IoIosCamera style={{ background: '#6c25ff', padding: '3px', borderRadius: '50%' }} size={20} color='white' />
                        </label>
                        <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                    </div>
                    <div>
                        <p className='font-semibold text-[15px]'>{userData.name || 'Marry Doe'}</p>
                        <p className='text-[14px]'>{userData.email || 'Marry@gmail.com'}</p>
                        <p className='text-[14px]'>{userData.phoneNumber || '123-456-7890'}</p>
                    </div>
                </div>
                <div className='px-5'>
                    <p className='text-[15px] font-medium'>Company Details</p>
                    <p className='text-[14px]'>Company: {userData.companyName || 'Not specified'}</p>
                    <p className='text-[14px]'>Agency: {userData.agency === 'yes' ? 'Yes' : 'No'}</p>
                </div>
                <p className='capitalize px-5 text-[14px] pb-7 border-b-2 border-dashed border-[#938d8d58] mx-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium excepturi nesciunt velit quas reprehenderit praesentium quidem maxime sequi.
                </p>
            </motion.div>
        </div>
    )
}

export default Dashboard;
