import { IoArrowForwardSharp } from "react-icons/io5";
import Navbar from "./Navbar";
import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="max-w-[1440px] mx-auto sm:h-[35rem] h-screen grid grid-cols-1 sm:grid-cols-2 items-end font-sans sm:px-20 px-6 sm:pb-20 py-6 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/heromain.png')" }}
            id="hero"
        >
            <div className="absolute top-0 w-full">
                <Navbar />
            </div>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className=" text-white flex flex-col gap-y-4 lg:pr-44">
                <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold mb-4">WISA Football Academy</h1>
                {/* <div className="flex flex-col gap-y-4 w-"> */}
                {/* <h3 className="text-xl text-center sm:text-left italic font-semibold">Train like a Pro, <br />
                    Perform like a Champion! </h3> */}

                <p className="text-base text-[#ffffff9f] text-center sm:text-left">From grassroot to greatness, let your dreams take flight. Join the football academy where it all happens. Begin your journey with Wisa Sports Academy.</p>
                {/* </div> */}
                <div className="flex flex-col items-center lg:flex-row gap-y-2 flex-nowrap gap-x-4 font-semibold">
                    <Link href="/#apply" className="bg-white max-w-60 px-2 py-2 text-black rounded-full hover:bg-gray-200 flex items-center gap-x-2 text-nowrap">
                        Join The Academy <span className="h-9 w-9 bg-[#FE0A0A] text-white rounded-full flex justify-center items-center"><IoArrowForwardSharp size={22} /></span>
                    </Link>
                    <Link href='/#programs' className="bg-[#FFFFFF40] max-w-60 border border-white px-4 py-3 text-white rounded-full hover:bg-[#ffffff54] text-nowrap ">
                        Explore Programs
                    </Link>
                </div>
            </div>
            <div className="">
                <p className="text-xl text-center sm:text-end italic text-[#FFFFFF80]">
                    &quot;Innovate, Dominate, Inspire&quot;
                </p>
            </div>
        </section>
    );
};

export default Hero;