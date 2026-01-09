import React from 'react'

export default function Skills() {
    const skills = [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'C#/Unity', level: 85 },
        { name: 'C++/Unreal', level: 75 },
        { name: 'Database Design', level: 80 },
    ]

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
                </h2>
                <p className="text-slate-400 text-center mb-12">Technologies I work with</p>
                <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-all"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}