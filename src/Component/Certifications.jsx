import { certificates } from "../utils/certificationsData";

function Certifications() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-10">Certifications</h1>
            <div id="Certifications" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 p-5 text-center">
                {
                    certificates.map((certificate, index) => (
                        <div key={index} className="border border-blue-400 mt-5 p-3 w-5/6 xl:h-72 h-80 relative place-items-center transform transition-transform duration-300 hover:translate-y-4 hover:scale-105">
                            <h2 className="mt-5 font-bold text-xl">{certificate.Name}</h2>
                            <p className="mt-4">{certificate.content}</p>
                            <a href={certificate.url}>
                                <button className="bg-blue-700 p-1.5 absolute bottom-2 left-1.5/3 text-lg rounded-xl">Show</button>
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default Certifications;