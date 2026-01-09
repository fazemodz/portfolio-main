import React from 'react'

interface Projectsectionsdata {
  ProjectTitle: string
  ProjectDescription: string
  ProjectImage: string
  ProjectURL: string
  ProjectSourceCodeURL?: string
  tech?: string[]
  colorScheme?: 'blue' | 'purple' | 'green'
}

const Projectsections: React.FC<Projectsectionsdata> = ({
                                                          ProjectTitle,
                                                          ProjectDescription,
                                                          ProjectImage,
                                                          ProjectURL,
                                                          ProjectSourceCodeURL,
                                                          tech = [],
                                                          colorScheme = 'blue',
                                                        }) => {
  const colorClasses = {
    blue: {
      border: 'hover:border-blue-500/50',
      text: 'group-hover:text-blue-400',
      badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      link: 'text-blue-400 hover:text-blue-300',
    },
    purple: {
      border: 'hover:border-purple-500/50',
      text: 'group-hover:text-purple-400',
      badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      link: 'text-purple-400 hover:text-purple-300',
    },
    green: {
      border: 'hover:border-green-500/50',
      text: 'group-hover:text-green-400',
      badge: 'bg-green-500/10 border-green-500/20 text-green-400',
      link: 'text-green-400 hover:text-green-300',
    },
  }

  const colors = colorClasses[colorScheme]

  return (
      <div
          className={`group relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl overflow-hidden ${colors.border} transition-all duration-300`}
      >
        <div className="aspect-video overflow-hidden">
          <img
              src={ProjectImage}
              alt={ProjectTitle}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className={`text-2xl font-bold mb-2 ${colors.text} transition-colors`}>
            {ProjectTitle}
          </h3>
          <p className="text-slate-400 mb-4">{ProjectDescription}</p>

          {tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t) => (
                    <span
                        key={t}
                        className={`px-3 py-1 border rounded-full text-xs font-mono ${colors.badge}`}
                    >
                {t}
              </span>
                ))}
              </div>
          )}

          <div className="flex gap-4">
            <a
                href={ProjectURL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${colors.link} transition-colors`}
            >
              View Project →
            </a>
            {ProjectSourceCodeURL && (
                <a
                    href={ProjectSourceCodeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
                >
                  Source Code →
                </a>
            )}
          </div>
        </div>
      </div>
  )
}

export default Projectsections