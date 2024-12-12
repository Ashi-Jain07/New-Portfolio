function HomePage() {
  return (
    <>
      <div className="text-center">
        <div className="text-white text-center mt-28">
          <h2 className="text-6xl m-2">Hello, It's me</h2>
          <p className="text-6xl m-2">Ashi Jain</p>
          <p className="text-xl m-1">and I am Full Stack Web Developer</p>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <div className="group relative flex items-center justify-center w-auto h-20">
            <a href="www.linkedin.com/in/ashi-jain-79722a210" className="relative">
              <div className="w-12 group-hover:w-max h-12 border-4 border-blue-700 rounded-full flex items-center justify-center p-1.5">
                <img src="/linkedIn.png" alt="Gmail" className="w-8 h-8 rounded-full" />
                <span className="items-center m-1 justify-center text-sm font-semibold hidden group-hover:flex">
                  www.linkedin.com/in/ashi-jain-79722a210
                </span>
              </div>
            </a>
          </div>

          <div className="group relative flex items-center justify-center w-auto h-20">
            <a href="mailto:ayushj0707@gmail.com" className="relative">
              <div className="w-12 group-hover:w-max h-12 border-4 border-blue-700 rounded-full flex items-center justify-center p-1.5">
                <img src="/gmail.png" alt="Gmail" className="w-8 h-8" />
                <span className="items-center m-1 justify-center text-sm font-semibold hidden group-hover:flex">
                  ayushj0707@gmail.com
                </span>
              </div>
            </a>
          </div>

          <div className="group relative flex items-center justify-center w-auto h-20">
            <a href="https://github.com/Ashi-Jain07" className="relative">
              <div className="w-12 group-hover:w-max h-12 border-4 border-blue-700 rounded-full flex items-center justify-center p-1.5">
                <img src="/github.png" alt="Gmail" className="w-8 h-8 rounded-full bg-white" />
                <span className="items-center m-1 justify-center text-sm font-semibold hidden group-hover:flex">
                  https://github.com/Ashi-Jain07
                </span>
              </div>
            </a>
          </div>

          <div className="group relative flex items-center justify-center w-auto h-20">
            <a href="https://wa.me/8109660997" className="relative">
              <div className="w-12 group-hover:w-max h-12 border-4 border-blue-700 rounded-full flex items-center justify-center p-1.5">
                <img src="/whatsapp.png" alt="Gmail" className="w-8 h-8 rounded-full" />
                <span className="items-center m-1 justify-center text-sm font-semibold hidden group-hover:flex">
                  8109660997
                </span>
              </div>
            </a>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1xkCKV1VQr2zJC3gVtaQ0WZkIcpOy020H/view?usp=drive_link"><button className="bg-blue-700 text-white p-1.5 text-lg mt-5 rounded-xl">Download CV</button></a>
      </div>
    </>
  )
};

export default HomePage;