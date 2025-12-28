import { projects } from "../../assets/assets";
import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar"


export default function ProjectsPage() {
  return (
    <>
        <Navbar/>
    <section className="px-[10%] py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">All Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {projects.map(project => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <div className="relative aspect-video">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5 bg-white">
              <h2 className="font-semibold text-xl">{project.title}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.slice(0, 3).map(t => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  )
}

