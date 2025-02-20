

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Import icons from Lucide

import logomain from "../../public/images/wisaLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[rgba(255,255,255,0.5)] shadow-lg font-sans font-semibold flex justify-center items-center fixed top-0 w-full z-50 backdrop-blur-md">
            <div className="w-full sm:px-20 px-6">
                <div className="flex justify-between items-center py-3">
                    {/* Logo Section */}
                    <div className="text-xl text-gray-800 flex gap-x-4 items-center">
                        <Image src={logomain} alt="WISA Logo" height={50} priority />
                        <Link href="/#hero">WISA</Link>
                    </div>

                    {/* Desktop Menu (Hidden on small screens) */}
                    <div className="hidden sm:flex space-x-4">
                        <Link href="/#hero" className="text-gray-800 hover:text-red-600 scroll-smooth">
                            Home
                        </Link>
                        <Link href="/#about" className="text-gray-800 hover:text-red-600 scroll-smooth">
                            About Us
                        </Link>
                        <Link href="/#apply" className="text-gray-800 hover:text-red-600 scroll-smooth">
                            Apply
                        </Link>
                        <Link href="/#contact" className="text-gray-800 hover:text-red-600 scroll-smooth">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="sm:hidden text-gray-800 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu (Hidden by default) */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } sm:hidden bg-[rgba(255,255,255,0.5)] backdrop-blur-md py-4 px-6 shadow-md rounded-b-lg absolute top-[74px] left-0 right-0`}
                >
                    <Link
                        href="/#hero"
                        className="block py-2 text-gray-800 hover:text-red-600 scroll-smooth opacity-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className="block py-2 text-gray-800 hover:text-red-600 scroll-smooth opacity-100"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/#apply"
                        className="block py-2 text-gray-800 hover:text-red-600 scroll-smooth opacity-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Apply
                    </Link>
                    <Link
                        href="/#contact"
                        className="block py-2 text-gray-800 hover:text-red-600 scroll-smooth opacity-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// import Image from "next/image";

// import Link from "next/link";
// import logomain from '../../public/images/wisaLogo.png'

// const Navbar = () => {
//     return (
//         <nav className="bg-[#FFFFFF80] shadow-lg font-sans font-semibold flex justify-center items-center">
//             <div className="w-full sm:px-20 px-6">
//                 <div className="flex justify-between items-center py-3">
//                     <div className="text-xl  text-gray-800 flex gap-x-4 items-center ">
//                         <Image
//                             // className="dark:invert"
//                             src={logomain}
//                             alt="About Us"
//                             // width={200}
//                             height={50}
//                             priority
//                         />
//                         <Link href="/#hero">WISA</Link>
//                     </div>
//                     <div className="flex space-x-4">
//                         <Link href="/#hero" className="text-gray-800 hover:text-red-600">
//                             Home
//                         </Link>
//                         <Link href="/#about" className="text-gray-800 hover:text-red-600">
//                             About Us
//                         </Link>
//                         <Link href="/#apply" className="text-gray-800 hover:text-red-600">
//                             Apply
//                         </Link>
//                         <Link href="/#contact" className="text-gray-800 hover:text-red-600">
//                             Contact Us
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;