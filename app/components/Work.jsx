"use client"
import { assets, workData, projects } from '../../assets/assets'
import { motion } from 'motion/react'
import { Send, ArrowRight } from 'lucide-react'

const getProjectSlugByTitle = (title) => {
    const project = projects.find(p => p.title === title);
    return project ? project.slug : '#';
};

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            id='work'
            className='max-w-6xl mx-auto px-4'
        >
            {/* Header */}
            <div className='flex flex-col gap-2 items-center my-4 text-center'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='text-sm sm:text-base font-semibold uppercase tracking-wide text-gray-600'
                >
                    My experience
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='text-4xl sm:text-5xl lg:text-6xl font-ovo font-extrabold mb-4 sm:mb-5 mt-2 text-gray-900'
                >
                    My Works
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className='text-lg sm:text-xl leading-relaxed font-ovo max-w-2xl mx-auto text-center text-md text-gray-500'
                >
                    These are my projects which I gained experience while doing.
                </motion.p>
            </div>
            {/* Project Cards */}
            <div className="flex flex-col gap-6 my-8 lg:flex-row">
                {workData.slice(0, 3).map(({ title, description, bgImage }, index) => (
                    <a
                        key={index}
                        href={`/projects/${getProjectSlugByTitle(title)}`}
                        className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition lg:flex-1"
                    >
                        <div
                            style={{ backgroundImage: `url(${bgImage})` }}
                            className="aspect-[4/3] min-h-[200px] sm:min-h-[220px] lg:min-h-[280px] bg-no-repeat bg-cover bg-center relative group-hover:scale-105 transition duration-500"
                        >
                            <div className="bg-black/70 text-white w-full p-4 absolute bottom-0 left-0 flex justify-between items-end">
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h1>
                                    <p className="text-sm sm:text-base text-gray-300">{description}</p>
                                </div>
                                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-white/30 rounded-full hover:bg-gray-700 transition">
                                    <Send size={16} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            {/* Show More Button */}
            <a
                href='/projects'
                className='flex mx-auto gap-2 text-gray-700 w-max px-4 py-2 sm:px-5 sm:py-2.5 border border-gray-700 rounded-full items-center justify-center hover:bg-gray-200 transition duration-300 text-sm sm:text-base'
            >
                Show More
                <ArrowRight size={16} />
            </a>
        </motion.div>
    )
}

export default Work
