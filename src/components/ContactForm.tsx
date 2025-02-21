'use client'
import Link from "next/link";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail, IoSend } from "react-icons/io5";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz2QE6qI3rIg7vg3Q7ZcQvk4wy52V7Uaa6iiZWykAc-0aNc2E0Ou4lUd9tPAIzuu5fl/exec'

    // const handleSubmit = async (e: React.FormEvent) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: (`fullName=${e.currentTarget.fullName.value}&email=${e.currentTarget.email.value}&message=${e.currentTarget.message.value}`),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("Message Sent Successfully!");
                setFormData({ fullName: "", email: "", message: "" });
            } else {
                setStatus(`Error: ${result.message}`);
            }
        } catch (error) {
            console.log(error as TypeError);
            setStatus("Error sending message.");
        }
    };



    return (
        <section id="contact" className="relative max-w-[1440px] mx-auto bg-cover bg-center text-white py-16 font-sans flex flex-col gap-y-6"
            style={{ backgroundImage: "url('/images/contact-bg.png')" }}> {/* Change image path */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            <div className="flex flex-col items-center text-center space-y-4 px-6">
                <h2 className="text-2xl lg:text-3xl font-mono font-bold">Contact Us</h2>
                <p className="text-gray-300 text-center max-w-xl">Do you have any questions or inquiries? Reach out to us. We are just a click or call away to provide assistance. </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="space-y-6 px-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <span><FaLocationDot /></span>
                            <div>
                                <h4 className="font-bold text-xl">Location</h4>
                                <p className="text-gray-300 max-w-md">No. 14, Bernada Quarters, Off Judges&lsquo; Quarters, Makurdi, Benue State, Nigeria.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <IoMail className="w-5 h-5" />
                            <div>
                                <h4 className="font-bold text-xl">Email</h4>
                                <Link href="mailto:wisafootballacademy@gmail.com" className="hover:underline text-gray-300">
                                    wisafootballacademy@gmail.com
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <IoCall className="w-5 h-5" />
                            <div>
                                <h4 className="font-bold text-xl">Phone</h4>
                                <p className="text-gray-300">+2348086367790</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-transparent px-6 rounded-xl shadow-lg text-gray-900">
                    <h3 className="text-xl font-semibold mb-4 text-white">Send Us A Message</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                        <label htmlFor="fullName" className="text-white"> Full Name
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
                            />

                        </label>

                        <label htmlFor="email" className="text-white">Email Address
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
                            />

                        </label>

                        <label htmlFor="message" className="text-white"> Message
                            <textarea
                                name="message"
                                placeholder="Write your message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-300 resize-none outline-none"
                            ></textarea>
                        </label>

                        <div className="flex justify-end">
                            <button type="submit"
                                className="px-7 flex items-center gap-x-2 bg-[#FE0A0A] text-white py-2 rounded-full text-lg font-semibold hover:bg-red-600 transition">
                                Send <IoSend />
                            </button>

                        </div>
                        {status && <p className="text-sm mt-2 text-center text-white">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
