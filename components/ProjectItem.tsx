import React from 'react'
import Image from 'next/image'
import ProjectModel from '@/models/models'
import Link from 'next/link'

function ProjectItem({ title, projectImage, tech, projectUrl }: ProjectModel) {
  return (
    <>
      <Link href={projectUrl}>
        <div className="flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 group hover:scale-105 ease-in duration-200 cursor-pointer">
          <Image
            src={projectImage}
            alt="homepage of nook project"
            className="rounded-md"
          />
        </div>
      </Link>
      <div>
        <Link href={projectUrl}>
          <div className="pt-10 flex justify-between items-center">
            <h3 className="hover:opacity-80">{title}</h3>
            <p className="text-sm">{tech}</p>
          </div>
        </Link>

        <p className="pt-6 md:text-md">
          A celebration of the spaces we live in.
        </p>
        <p className="md:text-md mb-8">
          Chart your design inspiration and fittings for your home renovation
          projects.
        </p>
        <Link
          href={projectUrl}
          className="hover:pl-1 hover:opacity-80 ease-in duration-200"
        >
          View project
        </Link>
      </div>
    </>
  )
}

export default ProjectItem
