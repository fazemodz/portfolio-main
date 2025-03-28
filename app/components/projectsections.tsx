import React from 'react'
interface Projectsectionsdata {
    ProjectTitle: string
    ProjectDescription: string
    ProjectImage: string
    ProjectURL: string
}
const Projectsections: React.FC<Projectsectionsdata> = ({
    ProjectTitle,
    ProjectDescription,
    ProjectImage,
    ProjectURL,
}) => {
    return (
        <>
            <section>
                <div className="mx-auto bg-gray-900 w-screen px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                                    {ProjectTitle}
                                </h2>

                                <p className="mt-4 text-white">
                                    {ProjectDescription}
                                </p>
                                <a
                                    className="inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                    target='_blank'
                                    href={ProjectURL}
                                >
                                    <span className="text-sm font-medium"> Check it out here </span>

                                    <svg
                                        className="size-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>

                            </div>
                        </div>

                        <div>
                            <img
                                src={ProjectImage}
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projectsections;
