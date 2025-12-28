"use client"
import { assets, workData, projects } from '../../assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Send, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const getProjectSlugByTitle = (title) => {
    const project = projects.find(p => p.title === title);
    return project ? project.slug : '#';
};

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}

            id='work' className='max-w-6xl mx-auto'>
            <div className='flex flex-col gap-3 items-center my-5'>
                <h4 className='font-ovo text-lg'>My Portfolio</h4>
                <h1 className='font-ovo text-5xl font-bold'>
                    My Latest Work</h1>
                <p className='font-ovo max-w-2xl mx-auto text-md text-gray-500'>
                    these are my projects which i take experiences while do it</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {workData.slice(0, 3).map(({ title, description, bgImage }, index) => (
                    <a
                        key={index}
                        href={`/projects/${getProjectSlugByTitle(title)}`}
                        className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition"
                    >
                        <div
                            style={{ backgroundImage: `url(${bgImage})` }}
                            className="aspect-[4/3] min-h-[280px] lg:min-h-[340px]
                   bg-no-repeat bg-cover bg-center relative
                   group-hover:scale-105 transition duration-500"
                        >
                            <div className="bg-black/80 text-white w-full p-6 absolute bottom-0 left-0
                        transition duration-500 flex justify-between items-end">
                                <div>
                                    <h1 className="font-semibold text-2xl">{title}</h1>
                                    <p className="text-sm text-gray-300">{description}</p>
                                </div>

                                <div className="w-10 aspect-square flex items-center justify-center
                          border border-white/30 rounded-full
                          hover:bg-gray-700 transition">
                                    <Send size={20} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>


            <a href='/projects' className='flex mx-auto gap-2 text-gray-700 w-max
            px-7 py-2 border-[0.5px] border-gray-700 rounded-full items-center 
            justify-center hover:bg-gray-200 my-15 duration-500'>
                Show More
                <ArrowRight size={16} className='w-4 items-center' />
            </a>
        </motion.div>
    )
}

export default Work