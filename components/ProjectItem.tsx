import React from 'react'
import Image from 'next/image'
import ProjectModel from '@/models/models'

function ProjectItem({ title, projectImage, tech, projectUrl }: ProjectModel) {
  return (
    <>
      <a href="#">
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:scale-105 ease-in duration-200 cursor-pointer">
          <Image
            src={projectImage}
            alt="homepage of nook project"
            className="rounded-md"
          />
        </div>

        <div>
          <div className="pt-10 flex justify-between items-center">
            <h3>{title}</h3>
            <p className="text-sm">{tech}</p>
          </div>

          <p className="pt-6 md:text-md">
            A celebration of the spaces we live in.
          </p>
          <p>
            Chart your design inspiration and fittings for your home renovation
            projects.
          </p>
        </div>
      </a>
    </>
  )
}

export default ProjectItem
