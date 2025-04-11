'use client'

import React, { useEffect, useState } from 'react'
import Banner from "./components/banner"
import Projectsections from "./components/projectsections"

export default function Home() {
  // States to hold the data
  //@ts-ignore
  const [softwareProjects, setSoftwareProjects] = useState<any[]>([])
  //@ts-ignore
  const [webProjects, setWebProjects] = useState<any[]>([])

  useEffect(() => {
    // Fetch data from JSON file
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setSoftwareProjects(data.softwareProjects)
        setWebProjects(data.webProjects)
      })
      .catch((error) => {
        console.error("Error loading project data:", error)
      })
  }, [])

  return (
    <>
      <Banner />

      {/* Software Projects */}
      <section id="software" className="bg-gray-900 w-full overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Software Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareProjects.map((project, index) => (
            <Projectsections key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Web Projects */}
      <section id="web" className="bg-gray-900 w-full overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Web Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webProjects.map((project, index) => (
            <Projectsections
              key={index}
              ProjectTitle={project.ProjectTitle}
              ProjectDescription={project.ProjectDescription}
              ProjectImage={project.ProjectImage}
              ProjectURL={project.ProjectURL}
              ProjectSourceCodeURL={project.ProjectSourceCodeURL}  // Pass the source code URL
            />
          ))}
        </div>
      </section>

      {/* Game Projects */}
      {/* <section id="game" className="bg-gray-900 w-full overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Game Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gameProjects.map((project, index) => (
            <Projectsections key={index} {...project} />
          ))}
        </div>
      </section> */}
    </>
  )
}
