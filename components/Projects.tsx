import React from 'react'
import ProjectItem from './ProjectItem'

import nookProjectImage from '../public/assets/projects/nookProjectImage2.png'

function Projects() {
  return (
    <div id="projects" className="w-full h-full pt-24">
      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] h-full px-2">
        <h2 className="py-2 mb-8 border-b-2">Projects</h2>
        <div className="p-14 lg:mb-20 bg-[#f5f5f5] rounded-xl">
          <ProjectItem
            title="Nook"
            projectImage={nookProjectImage}
            tech="React, Redux, Auth0, Sass"
            projectUrl="nook"
            intro="A celebration of the spaces we live in."
            description="Chart your design inspiration and fittings for your home renovation projects."
          />
        </div>
        {/* <div className="p-12 lg:mb-20 bg-[#f5f5f5] rounded-md">
          <ProjectItem
            title="Not Salone Del Mobile"
            projectImage={nookProjectImage}
            tech="React, Redux, Auth0, Sass"
            projectUrl="nook"
            intro="A celebration of the spaces we live in."
            description="Chart your design inspiration and fittings for your home renovation projects."
          />
        </div> */}
      </div>
    </div>
  )
}

export default Projects
