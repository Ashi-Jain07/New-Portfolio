function Contact() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-10">Contact Me</h1>
            <form id="CONTACT" className="text-center mt-10">
                <input type="text" name="firstName" placeholder="First Name" className="m-2 border border-black rounded-md sm:w-1/5 w-2/5 h-10 text-lg p-1" />
                <input type="text" name="lastName" placeholder="Last Name" className="m-2 border border-black rounded-md sm:w-1/5 w-2/5 h-10 text-lg p-1" /><br />
                <input type="tel" name="Phone no." placeholder="Phone No." className="m-2 border border-black rounded-md sm:w-1/5 w-2/5 h-10 text-lg p-1" />
                <input type="email" name="email" placeholder="Email Id" className="m-2 border border-black rounded-md sm:w-1/5 w-2/5 h-10 text-lg p-1" /><br />
                <textarea name="mytext" placeholder="Your Query" className="border border-black rounded-md p-1 sm:w-5/12 w-10/12 h-20" ></textarea><br />
                <button className="bg-blue-700 text-white p-1.5 text-lg mt-5 m-1 rounded-xl">Submit</button>
                <button className="bg-blue-700 text-white p-1.5 text-lg mt-5 m-1 rounded-xl">Cancel</button>
            </form>
            <div className="flex gap-2 justify-center mt-10 pb-5">
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
                    <a href="https://wa.me/8109660997" className="relative">
                        <div className="w-12 group-hover:w-max h-12 border-4 border-blue-700 rounded-full flex items-center justify-center p-1.5">
                            <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
                            <span className="items-center m-1 justify-center text-sm font-semibold hidden group-hover:flex">
                                8109660997
                            </span>
                        </div>
                    </a>
                </div>

                <div className="group relative flex items-center justify-center w-auto h-20">
                    <a href="tel:8109660997" className="relative">
                        <div className="w-12 group-hover:w-max h-12 border-4 border-blue-700 rounded-full flex items-center justify-center p-1.5">
                            <img src="/phone.png" alt="Phone" className="w-8 h-8 bg-white rounded-full" />
                            <span className="items-center m-1 justify-center text-sm font-semibold hidden group-hover:flex">
                                8109660997
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
};

export default Contact;