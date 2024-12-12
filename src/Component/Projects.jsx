import { projects } from "../utils/projectsData";

function Projects() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-10">Projects</h1>
            <div id="Project" className="grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 place-items-center justify-center items-center xmd:gap-8 sm:gap-4 gap-8 mt-10 pb-5">
                {
                    projects.map((data, index) => (
                        <div key={index} className="relative group w-64 h-64 overflow-hidden rounded-lg shadow-lg">
                            {/* Image */}
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
                                <h3 className="text-white text-lg font-bold mb-2">{data.name}</h3>
                                <p className="text-white text-sm mb-4">{data.content}</p>
                                <a
                                    href={data.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default Projects;