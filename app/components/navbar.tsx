import React from 'react'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        &lt;Alex /&gt;
                    </div>
                    <div className="flex gap-8">
                        {['About', 'Skills', 'Software', 'Web', 'Game', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm hover:text-blue-400 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}