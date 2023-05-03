import { StaticImageData } from 'next/image'

export default interface ProjectModel {
  title: string
  projectImage: StaticImageData
  tech: string
  projectUrl: string
}
