"use client"

import Navbar from "../../components/Navbar"
import { projects } from "../../../assets/assets"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, LucideSquareArrowOutUpRight } from 'lucide-react'
import { useState } from 'react'

export default function ProjectDetails({ params }) {
  const projectSlug = params?.name;

  const project = projects.find(p => p.slug === projectSlug)
  if (!project) return notFound()

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Navbar />
      <section className="px-[10%] py-20">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-wrap gap-3 mb-10">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full bg-gray-100 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-6 mb-6 ">
            {project.demoLink && (
              <Link
                href={project.demoLink}
                target="_blank"
                className="sm:px-6 sm:py-2 p-3 hover:bg-gray-950 bg-black text-white rounded-lg hover:opacity-80 flex items-center text-center gap-2"
              >
                Live Demo
                <LucideSquareArrowOutUpRight className="w-4" />
              </Link>
            )}

            <Link
              href={project.repoLink}
              target="_blank"
              className="px-6 py-2 border rounded-lg hover:bg-gray-100 flex items-center text-center gap-2"
            >
              GitHub Repo
              <LucideSquareArrowOutUpRight className="w-4" />

            </Link>
          </div>
        </div>

        {project.images.length > 0 ? (
          <div className="mb-12">
            <h2 className="mb-4">Project Screenshots</h2>

            {/* Main Image */}
            <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4 group">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-blue-600 scale-105' : 'border-transparent hover:border-gray-300'
                      }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Video Demo</h2>
          {project.videoLink ? (
            <div className="relative aspect-video max-w-2xl mx-auto rounded-xl shadow overflow-hidden">
              <iframe
                src={project.videoLink}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${project.title} Video Demo`}
              />
            </div>
          ) : (
            <p className="text-gray-500 italic">No video demo available.</p>
          )}
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>


      </section>
    </>
  )
}
