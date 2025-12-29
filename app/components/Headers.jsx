"use client"
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { motion } from "motion/react";
import { ArrowRight } from 'lucide-react';

const Headers = () => {
    return (
        <div className='w-11/12 max-w-3xl mt-10 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                className='text-center mt-30 lg:mt-0'>
                <Image className='rounded-full w-50' alt='image have problem' src={assets.ahmed_image} />
            </motion.div>
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: .5 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo text-center'>Hi! I'm Ahmed Bahget
                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 20, -15, 20, 0] }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                    style={{ transformOrigin: "bottom center" }}
                >
                    <Image
                        alt="hi hand"
                        className="w-6"
                        src={assets.hand_icon}
                    />
                </motion.span>
            </motion.h3>
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8, delay: .5 }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
                Full Stack Developer
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='font-ovo max-w-2xl mx-auto text-center text-md text-gray-500'>
                Full Stack / Backend Developer with expertise in Node.js, Express.js, React.js, Next.js, and modern web technologies.
            </motion.p>
            <div className="flex items-center gap-6 mt-6">
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.6, delay: 1.2 }}
                    href="https://www.linkedin.com/in/ahmed-bahget-50747a198/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                >
                    <Image
                        src={assets.linkedin_icon}
                        alt="LinkedIn"
                        className="w-7"
                    />
                </motion.a>

                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.6, delay: 1.2 }}
                    href="https://github.com/Ahmed-bahget/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                >
                    <Image
                        src={assets.github_icon}
                        alt="GitHub"
                        className="w-12"
                    />
                </motion.a>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, delay: 1 }}
                    href='#contact' className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>Contact Me
                    <ArrowRight className='w-4' />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, delay: 1.2 }}
                    target='_blank'
                    href='https://docs.google.com/document/d/1HglXfSJTxICX9A1mdhNdK3MYnV-jYJvfmMEFgDvcxFY/edit?tab=t.0#heading=h.f0nuwjoe9axz'
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My resume
                </motion.a>
            </div>
        </div>
    )
}

export default Headers;