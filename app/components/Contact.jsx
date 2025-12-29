"use client"
import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "377f5c76-ba36-4bb9-abbf-f5bd51cf9532");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] '>
            <div className='flex flex-col gap-3 items-center my-5'>
                <h4 className='font-ovo text-lg'>Connect With Me</h4>
                <h1 className='font-ovo text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    Get In Touch</h1>
                <p className='font-ovo max-w-2xl mx-auto text-center text-md text-gray-500'>
                    I'd love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.</p>
            </div>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='flex flex-col gap-2 sm:flex-row sm:gap-6 mt-10 mb-8'>
                    <input
                        type='text'
                        name='name'
                        required
                        placeholder='Enter your Name'
                        className='sm:flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white'
                    />
                    <input
                        type='email'
                        name='email'
                        required
                        placeholder='Enter your Email'
                        className='sm:flex-1 p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white'
                    />
                </div>
                <textarea rows='6' placeholder='Enter your message' required name='message'
                    className='w-full p-3 outline-none border-[.5px] border-gray-400 rounded-md bg-white' />
                <button
                    className='flex items-center justify-between text-center gap-2 py-3 px-6 mx-auto outline-none border-[.5px] border-gray-400 rounded-full text-white bg-black/80 hover:bg-black transition-colors duration-500'
                    type='submit'>Submit now
                    <ArrowRight size={16} className='w-4' />
                </button>
                <p className='mt-5 text-md text-gray-500'>{result}</p>
            </form>
        </motion.div>
    )
}

export default Contact