function AboutPage() {
    return (
        <>
            <h2 className="mt-16 text-3xl font-bold text-center">About me</h2>
            <div id="ABOUT" className="lg:flex place-items-center w-full p-5 mt-10">
                <div className="mt-5 lg:w-1/2 ml-5 place-items-center">
                    <img src="/about.jpg" className="w-2/3 h-full" />
                </div>
                <div className="w-2/3 text-center mt-5 lg:w-1/2 lg:mr-5">
                    <p>I am a passionate and skilled Full Stack Developer with 8 months of intensive training in designing and building dynamic, responsive, and user-friendly web applications. My journey in web development has equipped me with a strong foundation in both frontend and backend technologies, allowing me to create seamless solutions that align with modern web standards.I have hands-on experience with technologies like HTML, CSS, Tailwind CSS, and JavaScript, which I use to craft intuitive and visually appealing interfaces. On the backend, I am proficient in Node.js and Express.js, where I focus on building robust and scalable RESTful APIs. My database expertise lies in MongoDB, enabling me to manage and query data efficiently. I also utilize tools like React and Redux to create dynamic and interactive applications, while Git and GitHub help me maintain version control and collaborate effectively.Driven by a desire for continuous learning, I am always exploring new technologies and frameworks to expand my expertise and deliver innovative solutions. Whether it’s solving complex problems or transforming ideas into functional applications, I am dedicated to delivering high-quality results.
                    </p>
                </div>
            </div>

        </>
    )
};

export default AboutPage;