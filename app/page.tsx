'use client'
import React, { useEffect, useState } from 'react'
import Banner from './components/banner'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Projectsections from './components/projectsections'
import Skills from './components/skills'

interface Project {
    ProjectTitle: string
    ProjectDescription: string
    ProjectImage: string
    ProjectURL: string
    ProjectSourceCodeURL?: string
    tech?: string[]
}

export default function Home() {
    const [softwareProjects, setSoftwareProjects] = useState<Project[]>([])
    const [webProjects, setWebProjects] = useState<Project[]>([])
    const [gameProjects, setGameProjects] = useState<Project[]>([])

    useEffect(() => {
        fetch('https://f6o4iklysym30j8d.public.blob.vercel-storage.com/Portfolio/Data/projects-new.json')
            .then((response) => response.json())
            .then((data) => {
                setSoftwareProjects(data.softwareProjects)
                setWebProjects(data.webProjects)
                setGameProjects(data.gameProjects)
            })
            .catch((error) => {
                console.error('Error loading project data:', error)
            })
    }, [])

    return (
        <>
            <Banner />
            <Skills />

            {/* Software Projects */}
            <section id="software" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Software Projects
            </span>
                    </h2>
                    <p className="text-slate-400 mb-12">Enterprise-grade applications and tools</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {softwareProjects.map((project, index) => (
                            <Projectsections
                                key={index}
                                ProjectTitle={project.ProjectTitle}
                                ProjectDescription={project.ProjectDescription}
                                ProjectImage={project.ProjectImage}
                                ProjectURL={project.ProjectURL}
                                tech={project.tech}
                                colorScheme="blue"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Web Projects */}
            <section id="web" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Web Projects
            </span>
                    </h2>
                    <p className="text-slate-400 mb-12">Modern web applications and experiences</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {webProjects.map((project, index) => (
                            <Projectsections
                                key={index}
                                ProjectTitle={project.ProjectTitle}
                                ProjectDescription={project.ProjectDescription}
                                ProjectImage={project.ProjectImage}
                                ProjectURL={project.ProjectURL}
                                ProjectSourceCodeURL={project.ProjectSourceCodeURL}
                                tech={project.tech}
                                colorScheme="purple"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Game Projects */}
            <section id="game" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Game Projects
            </span>
                    </h2>
                    <p className="text-slate-400 mb-12">Interactive experiences and game development</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {gameProjects.map((project, index) => (
                            <Projectsections
                                key={index}
                                ProjectTitle={project.ProjectTitle}
                                ProjectDescription={project.ProjectDescription}
                                ProjectImage={project.ProjectImage}
                                ProjectURL={project.ProjectURL}
                                ProjectSourceCodeURL={project.ProjectSourceCodeURL}
                                tech={project.tech}
                                colorScheme="green"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
                    </h2>
                    <p className="text-slate-400 mb-12 text-lg">Open to opportunities and collaborations</p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/fazemodz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-blue-500/50 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/blackpinkarethebest/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-blue-500/50 transition-all"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 30 30">
                                <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}