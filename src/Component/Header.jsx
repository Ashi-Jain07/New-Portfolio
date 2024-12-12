function Header() {
    return (
        <>
            <div className="flex h-24 justify-between p-5 bg-gray-700">
                <div className="text-2xl font-bold mt-2">
                    <span className="p-1">Port</span>
                    <span className="bg-white p-1 text-black rounded-sm">Folio</span>
                </div>
                <div className="group relative flex">
                    <div className="group-hover:h-max p-1 flex flex-col items-end">
                        <img src="/menu.png" className="w-10 h-10 bg-white md:hidden" />
                        <div className="hidden group-hover:bg-white md:group-hover:bg-transparent group-hover:text-black md:group-hover:text-white group-hover:p-1 md:group-hover:p-0 group-hover:flex flex-col items-end md:flex md:flex-row lg:gap-8 gap-4 text-xl mt-1">
                            <a className="hover:bg-white p-2 hover:text-black">Home</a>
                            <a href="#ABOUT" className="hover:bg-white p-2 hover:text-black">About</a>
                            <a href="#SKILLS" className="hover:bg-white p-2 hover:text-black">Skills</a>
                            <a href="#Certifications" className="hover:bg-white p-2 hover:text-black">Certifications</a>
                            <a href="#Project" className="hover:bg-white p-2 hover:text-black">Projects</a>
                            <a href="#CONTACT" className="hover:bg-white p-2 hover:text-black">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;