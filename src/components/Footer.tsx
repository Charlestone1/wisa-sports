import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logomain from '../../public/images/wisaLogo.png'
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="max-w-[1440px] mx-auto bg-gray-200 py-10 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <Link href="/#hero" className="text-lg font-bold flex items-center gap-2 text-gray-800 font-mono">
                        <Image
                            src={logomain}
                            alt="About Us"
                            // width={200}
                            height={50}
                        // priority
                        />
                        WISA FOOTBALL ACADEMY
                    </Link>
                    <p className="text-sm text-gray-600 mt-2">
                        No. 14, Bernada Quarters, Off Judges&lsquo; Quarters, Makurdi, Benue State, Nigeria.
                    </p>
                    <div className="mt-4 space-y-2">
                        {/* <p className="flex items-center gap-2 text-gray-700">
                            <IoMailOutline className="w-5 h-5 text-red-500" />
                            wisafootballacademy@gmail.com
                        </p> */}

                        <p className="flex items-center gap-2 text-gray-700">
                            <IoMailOutline className="w-5 h-5 text-red-500" />
                            <Link href="mailto:wisafootballacademy@gmail.com" className="hover:underline">
                                wisafootballacademy@gmail.com
                            </Link>
                        </p>

                        <p className="flex items-center gap-2 text-gray-700">
                            <FiPhone className="w-5 h-5 text-red-500" />
                            +2348086367790
                            {/* <Link href="callto:08086367790" className="hover:underline">
                                08086367790
                            </Link> */}
                        </p>
                    </div>
                </div>

                {/* Center Links */}
                <div className="flex flex-col sm:items-center">
                    <h3 className="text-lg font-semibold mr-8">Links</h3>
                    <ul className="mt-2 space-y-2 ">
                        {[{ title: "Home", link: "#hero" }, { title: "About Us", link: "#about" }, { title: "Apply", link: "#apply" }, { title: "Contact Us", link: "#contact" }].map((link) => (
                            <li key={link.link}>
                                <Link href={link.link} className="text-gray-600 hover:text-red-600">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Socials */}
                <div>
                    <h3 className="text-lg font-semibold">Socials</h3>
                    <div className="flex gap-4 mt-3">
                        <a href="#" className="text-gray-600 hover:text-red-600">
                            <AiFillFacebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-600">
                            <BsInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-600">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-600">
                            <FaYoutube className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p> <span className="text-[17px]">&copy;</span> {new Date().getFullYear()} WISA SPORTS LIMITED | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;