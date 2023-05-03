import React from 'react'
import Image from 'next/image'
import ProjectModel from '@/models/models'

function ProjectItem({ title, projectImage, tech, projectUrl }: ProjectModel) {
  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:scale-105 ease-in duration-200 cursor-pointer">
        <Image
          src={projectImage}
          alt="homepage of nook project"
          className="rounded-md"
        />
      </div>

      <div>
        <h3 className="pt-8">{title}</h3>
        <p>{tech}</p>
        <p>{projectUrl}</p>
      </div>
    </>
  )
}

export default ProjectItem
