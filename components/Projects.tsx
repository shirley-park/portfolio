import React from 'react'
import ProjectItem from './ProjectItem'

import nook from '../public/assets/projects/nook.png'

function Projects() {
  return (
    <section id="projects" className="w-full h-screen mt-28">
      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] h-full px-2 py-16">
        <h2 className="py-2 mb-8 border-b-2">Projects</h2>

        <ProjectItem
          title="Nook"
          projectImage={nook}
          tech="React, Redux, Auth0, Sass"
          projectUrl="this is the link"
        />
      </div>
    </section>
  )
}

export default Projects
