import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem'
import { useRouter } from 'next/router'

import nookProjectImage from '../public/assets/projects/nookProjectImage2.png'
import crumbMob1 from '../public/assets/projects/crumbMob1.png'
import oasis3 from '../public/assets/projects/oasis3.png'

function Projects() {
  const router = useRouter()

  // set scroll restoration to manual
  useEffect(() => {
    if (
      'scrollRestoration' in history &&
      history.scrollRestoration !== 'manual'
    ) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // handle and store scroll position
  useEffect(() => {
    const handleRouteChange = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  // restore scroll position
  useEffect(() => {
    if ('scrollPosition' in sessionStorage) {
      window.scrollTo(0, Number(sessionStorage.getItem('scrollPosition')))
      sessionStorage.removeItem('scrollPosition')
    }
  }, [])

  return (
    <div id="projects" className="w-full h-full pt-24">
      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[70%] h-full px-2">
        <h2 className="py-2 mb-8 border-b-2">Projects</h2>
        <div className="p-4 md:p-14 mb-20 bg-[#f5f5f5] rounded-xl">
          <ProjectItem
            title="Oasis"
            projectImage={oasis3}
            tech="Next.js, Tailwind, Zustand"
            projectUrl="oasis"
            intro="Focus and meet your goals while growing your oasis"
            description="A productivity app where each successful focus session grows your oasis."
          />
        </div>
        <div className="p-4 md:p-14 mb-20 bg-[#f5f5f5] rounded-xl">
          <ProjectItem
            title="Nook"
            projectImage={nookProjectImage}
            tech="React, Redux, Sqlite3"
            projectUrl="nook"
            intro="A celebration of the spaces we live in."
            description="Chart your design inspiration and fittings for your home renovation projects."
          />
        </div>
        <div className="p-4 md:p-14 mb-20 bg-[#f5f5f5] rounded-xl">
          <ProjectItem
            title="Crumb"
            projectImage={crumbMob1}
            tech="React, Redux toolkit, React Query, Strapi"
            projectUrl="crumb"
            intro="A fullstack ecommerce site for an artisan bakery"
            description="Project status: in progress"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
